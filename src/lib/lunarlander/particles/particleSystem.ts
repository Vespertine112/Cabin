import { Entity } from '$lib/lunarlander/entites/entity';
import { Position, Vector } from '$lib/lunarlander/gameTypes';
import { Random } from '$lib/lunarlander/random';

/**
 * A generic *point* particle system
 */
export class ParticleSystem {
	private particles: Entity[] = [];
	private canvas: HTMLCanvasElement;
	private momentumGenCallback: () => Vector = () =>
		new Vector(Random.nextGaussian(), Random.nextGaussian());
	private offAfterFlag: boolean = false;
	private numOfParticles: number = 0;
	private dpiScaledParticleSize: number;

	position: Position; // NOTE: Represents the position of the system. This will dyamically change! Most likely the 'live' position of another entity!
	generateParticles: boolean = false;
	offAfterTimer: number = 0;

	constructor(
		canvas: HTMLCanvasElement,
		position: Position,
		generateParticles?: boolean,
		momentumGenCallback?: () => Vector
	) {
		this.canvas = canvas;
		this.position = position;
		this.generateParticles = generateParticles ?? false;
		this.momentumGenCallback = momentumGenCallback ?? this.momentumGenCallback;

		// NOTE: Need to re-work this. Too slow for each computation but doesn't
		// account for canvas size changes.
		this.dpiScaledParticleSize = Math.sqrt(this.canvas.width * this.canvas.height) * 0.005;
	}

	/*
	 * Creates 'n' particles
	 */
	createAndAddParticles(n: number) {
		let size = Math.abs(Random.nextGaussian(this.dpiScaledParticleSize, 1.3));
		this.numOfParticles += n;

		for (let index = 0; index < n; index++) {
			let entity = new Entity(
				'std',
				{
					render: false,
					position: this.position,
					width: size,
					height: size,
					lifeLength: Random.nextGaussian(4, 1.2) * 500,
					moveRatePerMs: Random.nextGaussian(),
					momentum: this.momentumGenCallback(),
					color: Random.getRandomFireColor()
				},
				{}
			);

			this.particles.push(entity);
		}
	}

	/**
	 * Update the state of all particles.  This includes removing any that have exceeded their lifetime.
	 */
	update(elapsedTime: number, numParticles?: number = 1) {
		this.particles = this.particles.filter((particle) => {
			particle.timeAlive += elapsedTime;
			particle.position = particle.position.fromVector(particle.momentum);

			let particleDead = particle.timeAlive > particle.lifeLength;
			if (particleDead) {
				this.numOfParticles -= 1;
			}

			return particle.timeAlive < particle.lifeLength;
		});

		if (this.offAfterTimer > 0) {
			this.offAfterTimer -= elapsedTime;
		} else if (this.offAfterFlag) {
			this.generateParticles = false;
		}

		if (this.generateParticles) {
			this.createAndAddParticles(numParticles);
		}
	}

	render() {
		const ctx = this.canvas.getContext('2d')!;
		ctx.shadowColor = 'rgba(0, 0, 0, 1)';
		ctx.shadowBlur = 10;
		ctx.shadowOffsetX = 5;
		ctx.shadowOffsetY = 5;

		// Draw circles for each particle
		for (let idx = 0; idx < this.particles.length; idx++) {
			const particle = this.particles[idx];

			let color = 'rgba(255, 0, 0, 0.5)';
			if (particle.color) color = particle.color;

			ctx.beginPath();
			ctx.arc(particle.position.x, particle.position.y, particle.width! / 2, 0, Math.PI * 2);
			ctx.fillStyle = color; // Adjust color and transparency as needed
			ctx.fill();
			ctx.closePath();
		}
	}

	/**
	 * Generate particles for 't' miliseconds then stops generating particles
	 * Requires you to manually turn on system again.
	 */
	turnOffAfter(t: number) {
		if (t <= 0) return;
		this.offAfterTimer = t;
		this.offAfterFlag = true;
	}

	/**
	 * Turns system back on
	 */
	turnOn() {
		this.offAfterTimer = 0;
		this.offAfterFlag = false;
	}

	/**
	 * Updates the positioning of the particle system
	 */
	updateSystemPosition(position: Position) {
		this.position = position;
	}

	getNumOfParticles(): number {
		return this.numOfParticles;
	}
}
