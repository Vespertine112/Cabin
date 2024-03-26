<style>
        .silkscreen-regular {
            font-family: "Silkscreen", sans-serif;
            font-weight: 400;
            font-style: normal;
        }

        :root {
            --llbackground: #070f2b;
            --llc2: #1b1a55;
            --llc3: #535c91;
            --llc1: #9290c3;
            --termGreen: #43e121;
            --pluto: #f3caa3;
            --mars: #d0d4db;
            --ganymede: #4c6885;
            --moon: #a3a7c2;
        }


        .cardWrapper {
            background-image: url("/lunarlander/backgrounds/main_background.png");
            background-size: cover;

			padding: unset !important;
			overflow-y: hidden !important;
			color: var(--llbackground) !important;
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
            background-color: var(--llc1);
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            position: relative;
        }

        .footer {
            width: 100%;
            background-color: var(--llc1);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 8px 0 8px 0;
            align-content: center;
            justify-content: flex-start;
            flex-wrap: nowrap;
            flex: 1 0 auto;
        }
       
        .displayPane {
            position: absolute;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            align-content: center;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
        }

        .renderPane {
			display: flex;
			flex-direction: column;
			flex-wrap: nowrap;
			align-content: center;
			align-items: center;
			justify-content: center;
			width:100%;
		}

        
        .losepane {
            backdrop-filter: blur(2px) brightness(0.5);
            color: var(--termGreen);
        }

        
        .modeButton {
            border-radius: 4px;
            box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.8);
            margin: 20px 0 20px 0;
            background-color: var(--llc3);
            color: var(--llbackground);
            font-size: large;
            padding: 4px 12px 4px 12px;
        }

       
        
        .hidden {
            display: none;
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

        .badLands {
            color: white;
        }

        @media only screen and (max-width: 767px) {
			.displayNone {
				display: none;
			}
			table {
				border-spacing: 0px 0rem;
			}
			.displayPane > h1 {
				font-size: 1rem;
			}
        }
    </style>

<script lang="ts">
    import { onDestroy, onMount, tick } from 'svelte';
    import { Game, Vector, type Level, levels, GameStatusEnum} from '$lib/lunarlander/gameTypes';
    import InputManager from '$lib/lunarlander/inputManager';
    import { fade, fly, blur } from 'svelte/transition';
	import { GameStateEnum, StateMachine } from '$lib/lunarlander/state/stateMachine';
	import type { Music } from '$lib/lunarlander';
	import { writable } from 'svelte/store';
	import { browser } from '$app/environment';
    import { topbarName, updateTopbarName } from '$lib/stores';
    import { MusicManager } from '$lib/lunarlander/Music';

	// TODO: It would be cool to have a trajectory line mapped to a custom
	// key...

	let show:boolean = false;
	updateTopbarName("Lunar Lander");

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
	let wrapperDiv: HTMLDivElement;

    let backgroundMusic: HTMLAudioElement;
    let thrustSound: HTMLAudioElement;
	let explosionSound: HTMLAudioElement;
	let levelWinSound: HTMLAudioElement;

    let lastTimestamp = performance.now();
	let frameCounter: number =0; 
	
	let highScores: { name: string, score: number}[] = [];

	// Grab the stored scores
	if (browser){
		const storedHighScores:any = localStorage.getItem('lunarlander.highScores');
		if (storedHighScores) {
			highScores = JSON.parse(storedHighScores);
		}
	}

	onMount(async () => {
		show = true;
		await tick();
	
		thrustSound.volume = 0.3;
		backgroundMusic.volume = 0.65;
		let music: Music = {backgroundMusic, thrustSound, explosionSound, levelWinSound}; 	
		MusicManager.getInstance().addMusic(music);

		stateMachine.initalize(
			lander, 
			canvas,
			inputManager,
			music, 
			highScores
		);

        async function update(elapsedTime: number) {
			stateMachine.update(elapsedTime);

			if (canvas){
				canvas.width = canvasWidth;
				canvas.height = canvasHeight;
			}

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

	onDestroy(()=>{
		show = false;
	})

	function updateHighScores(justGoHome: boolean = false) {
        if (!justGoHome){
			highScores.push({ name: playerName, score: lander.playerScore });
			highScores.sort((a, b) => b.score - a.score);

			localStorage.setItem('lunarlander.highScores', JSON.stringify(highScores));
		}

        lander.playerScore = 0;
		stateMachine.reset();
    }
</script>

<svelte:window on:keydown={keyPressHandler} on:keyup={keyReleaseHandler}
on:mousemove={mouseMoveHandler} on:mouseup={mouseUpHandler} />

{#if show}

<div class="cardWrapper silkscreen-regular" transition:fly={{y:50, x:50, duration:1000}} style="background-image: url({lander?.level?.background
?? '/lunarlander/backgrounds/main_background.png'});">
    <div class="header">
        <h1>Lunar Lander</h1>
    </div>

    <div class="paneWrapper" bind:clientWidth={canvasWidth}
	bind:clientHeight={canvasHeight}>
        <div
            in:fly={{ y: 100, duration: 1000 }}
            class={true ? 'renderPane' : 'hidden renderPane'}
            >
            <div class={lander.gameState != GameStatusEnum.Idle? "HUD" : "hidden"}>
                <span class="displayNone">HUD</span>
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
                        <tr class="displayNone">
                            <td>Time:</td>
                            <td>{playTime}</td>
                            <td>sec</td>
                        </tr>
                        <tr class="displayNone">
                            <td>Score:</td>
                            <td>{lander.playerScore}</td>
                            <td>sec</td>
                        </tr>
                        <tr class="displayNone" >
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
					<button class="modeButton" on:click={()=> updateHighScores()}>Submit Score</button>
					<button class="modeButton"
					on:click={()=>updateHighScores(true)}>Main Menu</button>
				</div>
			{/if}
            
			<canvas id="renderCanvas" style="width: 100%; height: 100%;" bind:this={canvas} />
        </div>

    </div>

    <div class="footer">
        <span>Brayden Hill - hillbgh@gmail.com</span>
    </div>

    <!-- Need to move this to the WebAudio API & make a manager at some point... -->
    <audio id="backgroundMusic" loop bind:this={backgroundMusic}>
        <source src="/lunarlander/music/ClearSkies.mp3" type="audio/mpeg" />
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
{/if}
