
import root from '../root.svelte';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_dir: "_app",
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\n<html lang=\"en\">\n    <head>\n        <meta charset=\"utf-8\" />\n        <link rel=\"icon\" href=\"" + assets + "/favicon.ico\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <link\n            href=\"https://fonts.googleapis.com/css2?family=Protest+Revolution&family=Rubik+Doodle+Shadow&family=Silkscreen:wght@400;700&family=Single+Day&display=swap\"\n            rel=\"stylesheet\"\n        />\n\n        <title>braydenhill</title>\n        " + head + "\n    </head>\n    <style>\n        :root {\n            --background: #231f20;\n            --persianRed: #bb4430;\n            --verdigris: #7ebdc2;\n            --vanilla: #f3dfa2;\n            --linen: #efe6dd;\n            --shadow: 0 8px 16px rgba(0, 0, 0, 1);\n        }\n\n        @font-face {\n            font-family: \"JetBrains Mono\";\n            src:\n                url(\"fonts/static/JetBrainsMono-Regular.ttf\") format(\"truetype\"),\n                url(\"fonts/JetBrainsMono-VariableFont_wght.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-Bold.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-BoldItalic.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-ExtraBold.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-ExtraBoldItalic.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-ExtraLight.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-ExtraLightItalic.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-Italic.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-Light.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-LightItalic.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-Medium.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-MediumItalic.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-Regular.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-SemiBold.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-SemiBoldItalic.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-Thin.ttf\") format(\"truetype\"),\n                url(\"fonts/static/JetBrainsMono-ThinItalic.ttf\") format(\"truetype\");\n            font-style: normal;\n        }\n\n        body {\n            background-image: linear-gradient(to bottom right, #231f20, #bb4430);\n            margin: 0;\n            scrollbar-width: thin;\n            scrollbar-color: var(--verdigris);\n            font-family: \"JetBrains Mono\", monospace;\n        }\n\n        .cardWrapper {\n            border-radius: 8px;\n            border: 4px solid var(--linen);\n            padding: 10px;\n            background-color: var(--background);\n            color: var(--linen);\n            box-shadow: 0 8px 16px rgba(0, 0, 0, 1);\n            flex: 1 1 auto;\n            display: flex;\n            flex-direction: column;\n            align-items: center;\n            justify-content: flex-start;\n            align-content: flex-start;\n            flex-wrap: nowrap;\n            overflow-y: scroll;\n            overflow-x: hidden;\n            font-family: \"JetBrains Mono\", monospace;\n        }\n\n        /* Generic color set for links */\n        .links {\n            color: var(--verdigris);\n        }\n\n        ::-webkit-scrollbar {\n            width: 12px;\n        }\n\n        ::-webkit-scrollbar-thumb {\n            background-color: var(--verdigris);\n            border-radius: 6px;\n        }\n\n        ::-webkit-scrollbar-track {\n            background-color: #181617;\n            border-radius: 3px;\n            width: 12px;\n        }\n\n        .topline {\n            color: var(--persianRed);\n        }\n\n        @media only screen and (max-width: 767px) {\n            .topline {\n                font-size: 1.25em;\n            }\n        }\n    </style>\n\n    <script>\n        let aciiOWl =\n            '   \\n\\\n\t\t                   \"\"    \"\".\\n\\\n                         / `-.  .-\" \\n\\\n                        /( (O))((O) )\\n\\\n                       /\"-..-\"/\\\\`-..|\\n\\\n                     ,\"\\\\   `-.\\\\/.--\"|\\n\\\n                   ,\" ( \\\\           |\\n\\\n                 ,\"( (   `._        |\\n\\\n                /( (  ( ( | `-._ _,-;\\n\\\n               /( (  ( ( (|     \"  ;\\n\\\n              / ((  (    /        /\\n\\\n             //         /        /\\n\\\n             //  / /  ,\"        /\\n\\\n            // /    ,\"         /\\n\\\n            //  / ,\"          ;\\n\\\n            //_,-\"          ;\\n\\\n            // /,,,,..-))-))\\    /|\\n\\\n              /; ; ;\\\\ `.  \\\\  \\\\  / |\\n\\\n             /; ; ; ;\\\\  \\\\.  . \\\\/./\\n\\\n            (; ; ;_,_,\\\\  .: \\\\   /\\n\\\n             `-\"-\"     | : . |:|\\n\\\n                       |. | : .|\\n\\\n\t\t\t\t\t   ';\n\n        console.log(aciiOWl);\n        console.log(\"Whooo goes there! \\nIf you're here, shoot me a message! \\n[hillbgh@gmail.com]\");\n\n        // $:{\n        //   console.log(window.innerWidth);\n        // }\n    </script>\n\n    <body data-sveltekit-preload-data=\"hover\">\n        <div style=\"display: contents\">" + body + "</div>\n    </body>\n</html>\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "a7hq4c"
};

export async function get_hooks() {
	return {
		
		
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
