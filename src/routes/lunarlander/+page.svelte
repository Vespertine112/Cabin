<style>
        .silkscreen-regular {
            font-family: "Silkscreen", sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        .silkscreen-bold {
            font-family: "Silkscreen", sans-serif;
            font-weight: 700;
            font-style: normal;
        }

        :root {
            --background: #070f2b;
            --c2: #1b1a55;
            --c3: #535c91;
            --c1: #9290c3;
            --termGreen: #43e121;
            --pluto: #f3caa3;
            --mars: #d0d4db;
            --ganymede: #4c6885;
            --moon: #a3a7c2;
        }

        body {
            background-color: var(--background);
        }

        .mainWrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            width: 100%;
            height: 100%;
            box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.8);

            background-image: url("/lunarlander/backgrounds/main_background.png");
            background-size: cover;
        }

        .paneWrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
            height: 80vh;
        }

        .header {
            width: 100%;
            background-color: var(--c1);
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            position: relative;
        }

        .footer {
            width: 100%;
            background-color: var(--c1);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px 0 8px 0;
            align-content: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            flex: 1 0 auto;
        }

        .controlPane {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 4px solid var(--c2);
            padding: 4px;
            flex: 1 0;
            justify-content: flex-start;
            align-content: center;
            flex-wrap: nowrap;
        }

        .controlPane > h1 {
            font-size: large;
        }

        .scorePane {
            display: flex;
            flex-direction: column;
            align-items: center;
            border: 4px solid var(--c2);
            padding: 4px;
            flex: 1 0;
            justify-content: flex-start;
            align-content: center;
            flex-wrap: nowrap;
        }

        .scorePane > h1 {
            font-size: large;
        }

        .displayPane {
            position: absolute;
            display: flex;
            border: 4px solid var(--c2);
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            align-items: center;
            justify-content: center;
            width: inherit;
            height: inherit;
        }
        .renderPane {
            position: relative;
            display: flex;
            border: 4px solid var(--c2);
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        #renderCanvas {
            /* backdrop-filter: blur(3px) drop-shadow(20px 40px 12px black); */
        }

        .losepane {
            backdrop-filter: blur(2px) brightness(0.5);
            color: var(--termGreen);
        }

        .winpane {
            color: var(--termGreen);
        }

        .modeButton {
            border-radius: 4px;
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.8);
            margin: 20px 0 20px 0;
            background-color: var(--c3);
            color: var(--background);
            font-size: large;
            padding: 4px 12px 4px 12px;
        }

        .h1-bkgrd {
            background-color: rgba(0, 0, 0, 0.8);
            color: var(--termGreen);
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-self: center;
            width: 80%;
            border-radius: 8px;
            align-items: center;
        }

        .glow {
            text-shadow:
                1px 1px 2px var(--background),
                0 0 1em var(--c3),
                0 0 0.2em var(--c3);
        }

        .scores {
            background-color: rgba(0, 0, 0, 0.8);
            color: var(--background);
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-self: center;
            width: 80%;
            max-height: 60vh;
            border-radius: 8px;
            align-items: center;
            overflow-y: scroll;
        }

        .hidden {
            display: none;
        }

        #helpButton {
            position: absolute;
            right: 8px;
            bottom: 8px;
            border-radius: 4px;
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.8);
            background-color: var(--c3);
            color: var(--background);
        }

        .HUD {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 100;
            background-color: rgba(0, 0, 0, 0.8);
            color: var(--termGreen);
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-self: center;
            overflow: hidden;
            border-radius: 8px;
            align-items: center;
        }

        .HUD > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
        }

        table {
            border-collapse: separate;
            border-spacing: 4px 1rem;
        }

        td {
            border-bottom: 1px solid var(--termGreen);
        }

        .safeLand {
            color: var(--termGreen);
        }

        .badLands {
            color: white;
        }
    </style>

<script lang="ts">
    import { onMount } from 'svelte';
    import { Game, Vector, type Level, levels, GameStatusEnum} from '$lib/lunarlander/gameTypes';
    import InputManager from '$lib/lunarlander/inputManager';
    import { fade, fly, blur } from 'svelte/transition';
	import { GameStateEnum, StateMachine } from '$lib/lunarlander/state/stateMachine';
	import type { Music } from '$lib/lunarlander';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';


    /**
     * Brayden Hill - A02287193 - hillbgh@gmail.com
    */

    // TODO: Watch the lecture
    // TODO: Build all Menuing!

    $: lander = new Game();
    $: canvasWidth = 1000;
    $: canvasHeight = 1000;
    $: playerName = '';
    $: playTime = Math.floor(lander.playTime / 1000);
	$: fps = 0;

	let frameTimer = 0;
	$: {
	if (playTime == frameTimer + 1){
	  fps = frameCounter;
	  frameCounter = 0;
	  frameTimer = playTime;
	}
	}

	const inputManager: InputManager = new InputManager();
	const keyPressHandler = inputManager.keyPress.bind(inputManager);
	const keyReleaseHandler = inputManager.keyRelease.bind(inputManager);
	const mouseMoveHandler = inputManager.mouseMove.bind(inputManager);
	const mouseUpHandler = inputManager.mouseUp.bind(inputManager);
	const stateMachine = new StateMachine();

    let canvas:HTMLCanvasElement;

    let backgroundMusic: HTMLAudioElement;
    let thrustSound: HTMLAudioElement;
	let explosionSound: HTMLAudioElement;
	let levelWinSound: HTMLAudioElement;

    let lastTimestamp = performance.now();
	let frameCounter: number =0; 

	let highScores: { name: string, score: number}[] = [];
	if (browser){
		const storedHighScores:any = localStorage.getItem('lunarlander.highScores');
		if (storedHighScores) {
			highScores = JSON.parse(storedHighScores);
		}
	}

    onMount(() => {
		thrustSound.volume = 0.2;
		let music: Music = {backgroundMusic, thrustSound, explosionSound,
		levelWinSound}; 
		stateMachine.initalize(
			lander, 
			canvas,
			inputManager,
			music, 
			highScores
		);

        function update(elapsedTime: number) {
			// Allows the canvas to dynamically size on *any* window change 
			if (canvas){ 
				canvas.width = canvasWidth;
				canvas.height = canvasHeight
			}

			stateMachine.update(elapsedTime);

            // This is redundant, but we have to echo assignment to get svelte to pick reactivity changes!!
            lander = lander;
        }

        // Game Loop
        function gameLoop(time: number) {
            const elapsedTime = time - lastTimestamp;
            lastTimestamp = time;

            update(elapsedTime);

            stateMachine.render(elapsedTime);

			frameCounter += 1;

            requestAnimationFrame(gameLoop);
        }

        // Start gameloop
        gameLoop(performance.now());
    })

	function updateHighScores() {
        if (lander.playerScore == 0) return;
		highScores.push({ name: playerName, score: lander.playerScore });
		highScores.sort((a, b) => b.score - a.score);
	
		localStorage.setItem('lunarlander.highScores', JSON.stringify(highScores));

        lander.playerScore = 0;
		stateMachine.reset();
    }
	
	let countdownNumbers = writable([3, 2, 1]);
	let countdownInterval = setInterval(() => {
		countdownNumbers.update(numbers => {
			if (numbers.length > 0) {
				return numbers.slice(0, numbers.length - 1);
			} else {
				clearInterval(countdownInterval);
				return [];
			}
		});
	}, 1000);
</script>

<svelte:window on:keydown={keyPressHandler} on:keyup={keyReleaseHandler}
on:mousemove={mouseMoveHandler} on:mouseup={mouseUpHandler} />

<div class="mainWrapper silkscreen-regular" style="background-image: url({lander?.level?.background
?? '/lunarlander/backgrounds/main_background.png'});" >
    <div class="header">
        <h1>Lunar Lander</h1>

    </div>
    <div class="paneWrapper">
        <div
            in:fly={{ y: 100, duration: 1000 }}
            class={true ? 'renderPane' : 'hidden renderPane'}
            bind:clientWidth={canvasWidth}
            bind:clientHeight={canvasHeight}
            >
            <div class={lander.gameState != GameStatusEnum.Idle? "HUD" : "hidden"}>
                <span>HUD</span>
                <hr style="width:100%; color: var(--termGreen);">
                <div >
                    <table class="table">
                        <tr class:badLands={lander.fuelLevel == 0}>
                            <td>FUEL:</td>
                            <td>{lander.fuelLevel}</td>
                            <td>m<sup>3</sup></td>
                        </tr>
                        <tr class:badLands={lander.landerSpeed > 2}>
                            <td>SPEED:</td>
                            <td>{lander.landerSpeed.toFixed(1)}</td>
                            <td>m/s<sup>2</sup></td>
                        </tr>
                        <tr class:badLands={lander.landerEntity?.direction > 5
						&& lander.landerEntity?.direction <
						355}>
                            <td>ANGLE:</td>
                            <td>{lander.landerEntity?.direction ?? 0}</td>
                            <td>&deg;</td>
                        </tr>
                        <tr >
                            <td>Time:</td>
                            <td>{playTime}</td>
                            <td>sec</td>
                        </tr>
                        <tr >
                            <td>Score:</td>
                            <td>{lander.playerScore}</td>
                            <td>sec</td>
                        </tr>
                        <tr >
                            <td>FPS:</td>
                            <td>{fps}</td>
                            <td>sec</td>
                        </tr>
                    </table>
                </div>
            </div>
			{#if lander.gameState == GameStatusEnum.Lost}
				<div class="displayPane losepane" in:blur={{ amount: 10, duration: 1500 }}>
					<h1>You can't park there!!</h1>
					<h3>Good Try</h3>
					<p>Score: {lander.playerScore}</p>
					<label for="playerNameInput">Enter your name</label>
					<input type="text" bind:value={playerName} id="playerNameInput" />
					<button class="modeButton" on:click={updateHighScores}>Submit Score</button>
				</div>
			{/if}
            <canvas id="renderCanvas" bind:this={canvas} />
        </div>

    </div>

    <div class="footer">
        <span>Created for CS 5410.</span>
        <span>Brayden Hill - A02287193 - hillbgh@gmail.com</span>
    </div>

    <!-- Need to move this to the WebAudio API at some point... -->
    <audio id="backgroundMusic" loop bind:this={backgroundMusic}>
        <source src="/lunarlander/music/adrift.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
    <audio id="thrustSound"  bind:this={thrustSound}>
        <source src="/lunarlander/music/thrust.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
    <audio id="explosionSound"  bind:this={explosionSound}>
        <source src="/lunarlander/music/shuttle_explosion.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
    <audio id="winSound" bind:this={levelWinSound}>
        <source src="/lunarlander/music/level_win.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
    </audio>
</div>
