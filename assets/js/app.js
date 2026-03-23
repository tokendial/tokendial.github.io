
var activeMethodsPill = {};
var activeScenesPill = {};
var activeModesPill = {};

var is_mobile = false;

category_examples = {
    'appearance-slider': {
        'scenes': [
            'appearance-tree-yellow',
            'appearance-campfire-blue',
            'appearance-dog-furry',
            'appearance-person-old',
            'appearance-snowflake-large-particle',
            'appearance-aurora-purple',
            'appearance-campfire-large',
            'appearance-water-more-droplet',
            'appearance-snowflake-larger',
            'appearance-campfire-smaller',
            'appearance-smoke-thicker',
            'appearance-person-happier',
            'appearance-smoke-thick',
        ],  // first item is default
        'methods': [''], // disabled
        'modes': [''],  // disabled
        'video_groups': {
            'appearance-tree-yellow': {
                'folder': '0_tree_yellow',
                'files': [
                    'cfg_0.0_attnmask.mp4',
                    'cfg_2.0_attnmask.mp4',
                    'cfg_4.0_attnmask.mp4',
                    'cfg_6.0_attnmask.mp4',
                    'cfg_8.0_attnmask.mp4',
                ],
            },
            'appearance-person-old': {
                'folder': '1_person_old',
                'files': ['0.mp4', '1.mp4', '2.mp4', '3.mp4', '4.mp4'],
            },
            'appearance-campfire-blue': {
                'folder': '2_campfire_blue',
                'files': ['1.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4'],
            },
            'appearance-smoke-thick': {
                'folder': '3_smoke_thick',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-campfire-large': {
                'folder': '4_campfire_large',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-aurora-purple': {
                'folder': '5_aurora_purple',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-snowflake-large-particle': {
                'folder': '6_snowflake_large_particle',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-snowflake-larger': {
                'folder': '7_snowflake_larger',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-campfire-smaller': {
                'folder': '8_campfire_smaller',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-person-happier': {
                'folder': '9_person_happier',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-smoke-thicker': {
                'folder': '10_smoke_thicker',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-water-more-droplet': {
                'folder': '11_water_more_droplet',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'appearance-dog-furry': {
                'folder': '12_dog_furry',
                'files': ['0.mp4', '1.mp4', '2.mp4', '3.mp4', '4.mp4'],
            },
        },
        'prompts': {
            'appearance-tree-yellow': 'Shifts foliage color from green to autumn tones',
            'appearance-person-old': 'Make the person older',
            'appearance-campfire-blue': 'Make the fire bluer',
            'appearance-smoke-thick': 'Make the smoke thicker',
            'appearance-campfire-large': 'Make the campfire larger',
            'appearance-aurora-purple': 'Make the aurora more purple',
            'appearance-snowflake-large-particle': 'Make the snowflake particles larger',
            'appearance-snowflake-larger': 'Make the snowflake larger',
            'appearance-campfire-smaller': 'Make the campfire smaller',
            'appearance-person-happier': 'Make the person happier',
            'appearance-smoke-thicker': 'Make the smoke thicker',
            'appearance-water-more-droplet': 'Add more water droplets',
            'appearance-dog-furry': 'Make the dog furrier',
        },
        'is_demo': false,
        'is_appearance_gallery': true,
        'current_scene': null,
        'description': `
            Appearance sliders enable continuous, fine-grained control over visual attributes such as color, lighting, texture, as well as structual properties like shape, size, and spatial extent.
            Unlike prompt-based editing, which often produces discrete or unstable changes, our slider provides a smooth and predictable way to adjust attribute strength. <br> <br>
            As the slider increases, the edit evolves monotonically—from subtle variations to strong transformations—while preserving identity, background, and overall scene structure.
        `,
    },
    'motion-slider': {
        'scenes': [
            'motion-couple-2',
            'motion-car',
            'motion-smoke',
            'motion-ink',
            'motion-couple',
            'motion-dog',
            'motion-wine',
            'motion-candle',
        ],  // first item is default
        'methods': [''], // disabled
        'modes': [''],  // disabled
        'video_groups': {
            'motion-smoke': {
                'folder': '1_smoke',
                'files': ['1.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4'],
            },
            'motion-ink': {
                'folder': '2_ink',
                'files': ['2.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4'],
            },
            'motion-couple': {
                'folder': '3_couple',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'motion-couple-2': {
                'folder': '7_couple',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'motion-car': {
                'folder': '8_car',
                'files': ['4.mp4', '5.mp4', '6.mp4', '8.mp4', '9.mp4'],
            },
            'motion-dog': {
                'folder': '4_dog',
                'files': ['1.mp4', '2.mp4', '3.mp4', '4.mp4', '5.mp4'],
            },
            'motion-wine': {
                'folder': '5_wine',
                'files': ['1.mp4', '3.mp4', '4.mp4', '5.mp4', '6.mp4'],
            },
            'motion-candle': {
                'folder': '6_candle',
                'files': ['-5.mp4', '-3.mp4', '1.mp4', '3.mp4', '5.mp4'],
            },
        },
        'prompts': {
            'motion-smoke': 'Make the smoke moves faster',
            'motion-ink': 'Make the ink flow faster',
            'motion-couple': 'Motion slider: couple',
            'motion-couple-2': 'Motion slider: couple (variant 2)',
            'motion-car': 'Motion slider: car',
            'motion-dog': 'Motion slider: dog',
            'motion-wine': 'Motion slider: wine',
            'motion-candle': 'Motion slider: candle',
        },
        'is_demo': false,
        'is_appearance_gallery': true,
        'current_scene': null,
        'description': `Motion sliders provide continuous control over motion dynamics, such as intensity, speed, and magnitude.
                        Increasing the slider amplifies motion in a smooth and consistent manner, while maintaining temporal coherence and preserving the underlying motion pattern.`,
    },
    'masking': {
        'original': '0.mp4',
        'scale_labels': ['Smaller edit', 'Medium edit', 'Larger edit'],
        'groups': [
            {
                'key': 'older',
                'label': '"Person <span class="masking-kw" style="color:#2ecc40">Older</span>" Slider',
                'arrows': ['#2ecc40'],
                'image': 'older.png',
                'videos': ['older_2.mp4', 'older_3.mp4', 'older_4.mp4'],
            },
            {
                'key': 'redder',
                'label': '"Campfire <span class="masking-kw" style="color:#e74c3c">Redder</span>" Slider',
                'arrows': ['#e74c3c'],
                'image': 'redder.png',
                'videos': ['redder_2.mp4', 'redder_4.mp4', 'redder_5.mp4'],
            },
            {
                'key': 'compose',
                'label_top': '"Campfire <span class="masking-kw" style="color:#9b59b6">Smaller</span>" Slider',
                'label_bottom': '"Person <span class="masking-kw" style="color:#f39c12">Stronger</span>" Slider',
                'arrows': ['#9b59b6', '#f39c12'],
                'image': 'compose.png',
                'videos': ['compose_1.mp4', 'compose_2.mp4', 'compose_3.mp4'],
            },
        ],
        'description': `The original video is shown on the left, while masked track edits are visualized in the center. Each row demonstrates progressively stronger edits from left to right.`,
    },
    'compose-sliders': {
        'folder': 'compose-ink',
        'rows': [1, 2, 3, 4],
        'cols': [1, 2, 3, 4],
        'axis_top': ['Less red', 'Ink getting redder', 'More red'],
        'axis_left': ['Less diluted', 'Ink getting diluted', 'More diluted'],
        'description': `Composed sliders enable simultaneous control over multiple semantic attributes through independent editing directions.
By combining sliders, users can achieve smooth, predictable joint transformations while maintaining disentanglement between attributes.<br><br>
Here, color (horizontal) and dilution (vertical) are controlled independently, illustrating that multiple attributes can be composed without mutual interference.`,
    },
    'threed-control': {
        'scenes': ['toy-dinosaurs', 'woman-yoga', 'cake'],
        'methods': [''], // disabled
        'modes': [''],  // disabled
        'labels': {
            'toy-dinosaurs':    ['Input', 'Left dinosaur in front', 'Right dinosaur in front'],
            'cake':             ['Input', 'Rotate clockwise', 'Rotate counter-clockwise'],
            'woman-yoga':       ['Input', 'Rotate clockwise', 'Rotate counter-clockwise'],
        },
        'columns': 3,
        'is_demo': true,
        'current_scene': null,
        'description': `Our method leverages 3D point tracks for precise 3D object motion control, accurately handling <a onclick="selectSceneByName('threed-control', 'toy-dinosaurs')">object depth order (tracks visualized with depth values)</a> and occlusions/disocclusions during <a onclick="selectSceneByName('threed-control', 'woman-yoga')">3D rotations</a>.`,
    },
    'failures': {
        'scenes': ['pour-coffee', 'jump-boat'],
        'methods': [''], // disabled
        'modes': [''],  // disabled
        'labels': {
            'beer':         ['Input', 'Output', 'Warped reference'],
            'pour-coffee':  ['Input', 'Output', 'Warped reference'],
            'volleyball':   ['Input', 'Output', 'Warped reference'],
            'mopping':      ['Input', 'Output', 'Warped reference'],
        },
        'columns': 3,
        'is_demo': true,
        'current_scene': null,
        'description': `Our approach still has a few limitations:
        (i) complex, motion-dependent physical effects (e.g., liquid dynamics like <a onclick="selectSceneByName('failures', 'pour-coffee')">coffee and milk mixing</a>) are not synthesized correctly,
        and (ii) small objects with large motion changes (e.g., <a onclick="selectSceneByName('failures', 'jump-boat')">a 270&deg front-flip</a>) can suffer distortions when their tracks are densely clustered and noisy.
        `,
    },
    'comparisons': {
        'scenes': ['car-turn', 'sea-turtle', 'three-skaters', 'man-jump-water', 'seal', 'cake'],
        'methods': ['ATI', 'DaS', 'PaC', 'ReVideo', 'TrajAttn', 'GEN3C', 'TrajCrafter', 'ReCamMaster'],
        'modes': [''],
        'labels': {
            'three-skaters':    ['Input video warped by target motion <br> Camera: move right; Object: adjust skateboarders\' paths'],
            'seal':             ['Input video warped by target motion <br> Camera: arc left; Object: unchanged'],
            'car-turn':         ['Input video warped by target motion <br> Camera: unchanged; Object: rotate the car to make it drift'],
            'cake':             ['Input video warped by target motion <br> Camera: static; Object: rotate the cake'],
            'sea-turtle':       ['Input video warped by target motion <br> Camera: static; Object: unchanged'],
            'man-jump-water':   ['Input video warped by target motion <br> Camera: move left; Object: adjust falling location'],
            'mochi':            ['Ground-truth'],
            'backpack':         ['Ground-truth'],
        },
        'method_labels': {
            'DaS':              'Diffusion as Shader<br>(track-conditioned I2V)',
            'ATI':              'ATI<br>(track-conditioned I2V)',
            'PaC':              'Perception as Control<br>(track-conditioned I2V)',
            'ReVideo':          'ReVideo<br>(track-conditioned IV2V)',
            'GEN3C':            'GEN3C<br>(Camera-controlled inpainting-based V2V)',
            'TrajCrafter':      'Trajectory Crafter<br>(Camera-controlled inpainting-based V2V)',
            'TrajAttn':         'Trajectory Attention<br>(track-conditioned I2V with an NVS-Solver extension)',
            'ReCamMaster':      'ReCamMaster<br>(Camera-controlled V2V)',
        },
        'enable_methods': {
            'three-skaters':    ['ATI', 'DaS', 'PaC', 'GEN3C', 'TrajCrafter', 'TrajAttn', 'ReVideo'],
            'car-turn':         ['ATI', 'DaS', 'PaC', 'GEN3C', 'TrajCrafter', 'TrajAttn', 'ReVideo'],
            'cake':             ['ATI', 'DaS', 'PaC', 'GEN3C', 'TrajCrafter', 'TrajAttn', 'ReVideo'],
            'sea-turtle':       ['ATI', 'DaS', 'PaC', 'GEN3C', 'TrajCrafter', 'TrajAttn', 'ReVideo', 'ReCamMaster'],
            'seal':             ['ATI', 'DaS', 'PaC', 'GEN3C', 'TrajCrafter', 'TrajAttn', 'ReVideo', 'ReCamMaster'],
            'man-jump-water':   ['ATI', 'DaS', 'PaC', 'GEN3C', 'TrajCrafter', 'TrajAttn', 'ReVideo'],
        },
        'is_demo': false,
        'is_comparison': true,
        'current_scene': null,
        'current_method': null,
        'description': `
            Existing methods have limitations in jointly editing camera and object motions while preserving scene context:
            <ul>
                <li> <b>Track-conditioned image-to-video (I2V)</b> methods (<a href="#ref-das">DaS</a>, <a href="#ref-ati">ATI</a>, <a href="#ref-pac">PaC</a>) generate videos from a single frame,
                    while <a href="#ref-revideo">ReVideo</a> and the extended <a href="#ref-trajattn">TrajAttn</a> additionally takes a masked video input (cropped background or warped frames), these methods  <a onclick="selectSceneByName('comparisons', 'car-turn', 'ATI')">lose the full scene context</a> of the input video.</li>
                </li>
                <li> <b>Camera-controlled video-to-video (V2V)</b> approaches (<a href="#ref-gen3c">GEN3C</a>, <a href="#ref-trajcrafter">TrajCrafter</a>) inpaint from the warped input video but fails to <a onclick="selectSceneByName('comparisons', 'car-turn', 'GEN3C')">shadows</a> or <a onclick="selectSceneByName('comparisons', 'man-jump-water', 'TrajCrafter')">water splashes</a> of the edited objects.
                    <a href="#ref-recamaster">ReCamMaster</a> directly inputs the target camera extrinsics (see camera-only editing cases, <a onclick="selectSceneByName('comparisons', 'sea-turtle', 'ReCamMaster')">sea turtle</a> and <a onclick="selectSceneByName('comparisons', 'seal', 'ReCamMaster')">seal</a>).
                    We observed that ReCamMaster fails in specific fixed-viewpoint cases (e.g., <a onclick="selectSceneByName('comparisons', 'sea-turtle', 'ReCamMaster')">sea turtle</a>), likely because such scenarios were not adequately represented in its training data.
                </li>
            </ul>
            In contrast, our method conditions on the entire unmasked input video and the pair of input and target 3D tracks for joint camera and object motion editing with the consistency of the original scene context.
        `,
    },
    'traindata': {
        'scenes': ['syn-exp1', 'syn-exp2', 'real-exp1', 'real-exp2'],
        'methods': ['synthetic', 'real'],
        'modes': [''],
        'labels': {
            'syn-exp1':     ['Training input', 'Ground-truth'],
            'syn-exp2':     ['Training input', 'Ground-truth'],
            'real-exp1':    ['Training input', 'Target output'],
            'real-exp2':    ['Training input', 'Target output'],
        },
        'enable_scenes': {
            'synthetic':    ['syn-exp1', 'syn-exp2'],
            'real':         ['real-exp1', 'real-exp2'],
        },
        'method_buttons': {
            'synthetic': 'Stage 1: Synthetic Data',
            'real': 'Stage 2: Real Data',
        },
        'columns': 2,
        'is_demo': true,
        'current_scene': null,
        'description': `To train our track-conditioned V2V model, a major challenge lies in the scarcity of ideal, annotated video pairs for motion manipulation.
                        To tackle this, we adopt a two-stage fine-tuning approach. Click the buttons below to see the training data used in each stage.`,
        'method_descriptions': {
            'synthetic': `Our model is first fine-tuned on the synthetic data with ground-truth point tracks to learn motion control. Each video pair shares the same objects and background scenes but differs in object actions and camera motions.`,
            'real': `We continue fine-tuning on real data by sampling two non-contiguous clips from a monocular video (as illustrated), leveraging its natural motion to scalably simulate joint camera and object motion changes. Please note: The examples shown are from publicly available videos, not our internal training data.
                    <br><span class="description-real-data-illustration"><img src="./assets/images/traindata-real.svg"></span>`,
        }
    },
    'model-analysis': {
        'methods': ['2dvs3d', 'tokenvis', 'sparsity', 'noisiness', 'text-prompt', 'seeds'],
        'scenes': ['ride-horse', 'woman-yellow-wall', 'three-skaters', 'sea-turtle', 'taichi', 'toy-dinosaurs', 'wallaby', 'dog-beach', 'woman-yoga'],
        'method_buttons': {
            'sparsity': 'Sparsity of tracks',
            'noisiness': 'Noisiness of tracks',
            '2dvs3d': '2D vs 3D tracks',
            'tokenvis': 'Track token visualization',
            'text-prompt': 'Effect of texts',
            'seeds': 'Random seeds',
        },
        'modes': [
            'N=32', 'N=256', 'STD=4', 'STD=16',
        ],
        'enable_scenes': {
            'sparsity':     ['ride-horse', 'woman-yellow-wall'],
            'noisiness':    ['three-skaters', 'sea-turtle'],
            '2dvs3d':       ['taichi', 'toy-dinosaurs'],
            'tokenvis':     ['toy-dinosaurs'],
            'text-prompt':  ['wallaby', 'dog-beach'],
            'seeds':        ['woman-yoga'],
        },
        'enable_modes': {
            'sparsity':     [],
            'noisiness':    [],
            '2dvs3d':       [],
            'tokenvis':     [],
            'text-prompt':  [],
            'seeds':        [],
        },
        'method_columns': {
            'sparsity':     [['Input', 'N=1024', 'N=256', 'N=32']],
            'noisiness':    [['Input', 'STD=0', 'STD=4', 'STD=16']],
            '2dvs3d':       [['ref', '3D', '2D']],
            'text-prompt':  [['Input', 'prompt1', 'prompt2']],
            'seeds':        [['Input', 'seed0', 'seed1', 'seed2']],
            'tokenvis':     [['Input', 'left', 'right']],
        },
        'column_labels': {
            '2dvs3d': {
                'taichi': {'ref': 'Target motion', '3D': 'Model with 3D tracks (Ours)', '2D': 'Model with 2D tracks'},
                'toy-dinosaurs': {'ref': 'Target motion warped<br>(left dinosaur in front)', '3D': 'Model with 3D tracks (Ours)', '2D': 'Model with 2D tracks'},
            },
            'text-prompt': {
                'dog-beach': {'Input': 'Input', 'prompt1': '\"a dog jumps on a beach, causing water splashes.\"', 'prompt2': '\"A dog jumps on a sticky honey without splashes\"'},
                'wallaby': {'Input': 'Input', 'prompt1': '\"A wallaby in a zoo\"', 'prompt2': '\"A wallaby on a beach\"'},
            },
            'seeds': {
                'woman-yoga': {'Input': 'Input', 'seed0': 'Seed 0', 'seed1': 'Seed 1', 'seed2': 'Seed 2'}
            },
            'tokenvis': {
                'toy-dinosaurs': {'Input': 'Input', 'left': 'Left dinosaur in front', 'right': 'Right dinosaur in front'}
            }
        },
        'method_descriptions': {
            '2dvs3d': `
                        We compare our final model using 3D tracks with an ablated version trained only with 2D tracks.
                        <br><br>
                        The 3D track inputs provide crucial depth cues, enabling the model to correctly handle <a onclick="selectSceneByName('model-analysis', 'taichi', '2dvs3d')">complex 3D rotations during human motion transfer</a>
                        and <a onclick="selectSceneByName('model-analysis', 'toy-dinosaurs', '2dvs3d')">depth ordering (tracks visualized with depth values)</a>.
                        <br><br>
                        Top row: video; bottom row: Track overlay.
                    `,
            'tokenvis': `
                        We visualize the paired track tokens from our 3D track conditioner using PCA.
                        <br><br>
                        The 3rd row shows the tokens <i>before</i> adding the z-embedding, which primarily capture rich visual context sampled from the input video.
                        <br><br>
                        The 4th row shows the final tokens <i>after</i> adding the z-embedding. These now contain additional depth cues (e.g., in the visualization, darker colors represent closer objects). 
                    `,
            'sparsity': `
                        Our model is trained on a random number of point tracks between [500, 1000], and we test its robustness to sparser inputs not seen during training.
                        <br><br>
                        While extremely sparse inputs (N=32) can cause motion artifacts and undesired generation due to insufficient correspondences,
                        a denser sparse input (N=256)—though still sparser than the training range—significantly enhances motion control and visual quality.
                    `,
            'noisiness': `
                        To account for potential noise and inaccuracies in estimated 3D tracks and camera poses, we test our model's robustness to perturbed inputs.
                        This experiment involves adding varying amounts of Gaussian noise to the target point tracks.
                        <br><br>
                        Our model maintains satisfactory motion control and visual quality with mild noise (STD=4px),
                        but excessive noise (STD=16px) leads to noticeable artifacts and diminished control accuracy.
                    `,
            'text-prompt': `
                        While our model primarily relies on 3D track conditions for precise motion control,
                        text prompts can provide supplementary context.
                        This is particularly useful for generating <a onclick="selectSceneByName('model-analysis', 'wallaby', 'text-prompt')">unseen regions</a> or adding fine-grained details (e.g., <a onclick="selectSceneByName('model-analysis', 'dog-beach', 'text-prompt')">water effects</a>).
                    `,
            'seeds': `
                        Using different random seeds leads to slight variations in the output.
                        Please note that all above results shown on this webpage are generated using the same seed (=0).
            `,
        },
        'is_demo': false,
        'is_comparison': false,
    }
}

const teaserInteractiveConfig = [
    {
        key: "4_cat_kitten",
        title: "Make the cat more kitten-like",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/4_cat_kitten/-1.mp4" },
            { scale: 1, src: "./assets/videos/interactive/4_cat_kitten/0.mp4" },
            { scale: 2, src: "./assets/videos/interactive/4_cat_kitten/1.mp4" },
            { scale: 3, src: "./assets/videos/interactive/4_cat_kitten/2.mp4" },
            { scale: 4, src: "./assets/videos/interactive/4_cat_kitten/3.mp4" },
            { scale: 5, src: "./assets/videos/interactive/4_cat_kitten/4.mp4" },
            { scale: 6, src: "./assets/videos/interactive/4_cat_kitten/5.mp4" },
        ],
    },
    {
        key: "7_person_old",
        title: "Make the person older",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/7_person_old/0.5.mp4" },
            { scale: 1, src: "./assets/videos/interactive/7_person_old/1.mp4" },
            { scale: 2, src: "./assets/videos/interactive/7_person_old/2.mp4" },
            { scale: 3, src: "./assets/videos/interactive/7_person_old/3.mp4" },
            { scale: 4, src: "./assets/videos/interactive/7_person_old/4.mp4" },
            { scale: 5, src: "./assets/videos/interactive/7_person_old/5.mp4" },
            { scale: 6, src: "./assets/videos/interactive/7_person_old/6.mp4" },
            { scale: 7, src: "./assets/videos/interactive/7_person_old/7.mp4" },
            { scale: 8, src: "./assets/videos/interactive/7_person_old/8.mp4" },
            { scale: 9, src: "./assets/videos/interactive/7_person_old/9.mp4" },
            { scale: 10, src: "./assets/videos/interactive/7_person_old/10.mp4" },
        ],
    },
    {
        key: "5_dog_furry",
        title: "Make the dog furrier",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/5_dog_furry/0.mp4" },
            { scale: 1, src: "./assets/videos/interactive/5_dog_furry/1.mp4" },
            { scale: 2, src: "./assets/videos/interactive/5_dog_furry/2.mp4" },
            { scale: 3, src: "./assets/videos/interactive/5_dog_furry/3.mp4" },
            { scale: 4, src: "./assets/videos/interactive/5_dog_furry/4.mp4" },
            { scale: 5, src: "./assets/videos/interactive/5_dog_furry/5.mp4" },
            { scale: 6, src: "./assets/videos/interactive/5_dog_furry/6.mp4" },
            { scale: 7, src: "./assets/videos/interactive/5_dog_furry/7.mp4" },
            { scale: 8, src: "./assets/videos/interactive/5_dog_furry/8.mp4" },
        ],
    },
    {
        key: "8_fire_large",
        title: "Make the fire larger",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/8_fire_large/1.mp4" },
            { scale: 1, src: "./assets/videos/interactive/8_fire_large/2.mp4" },
            { scale: 2, src: "./assets/videos/interactive/8_fire_large/3.mp4" },
            { scale: 3, src: "./assets/videos/interactive/8_fire_large/4.mp4" },
            { scale: 4, src: "./assets/videos/interactive/8_fire_large/5.mp4" },
            { scale: 5, src: "./assets/videos/interactive/8_fire_large/6.mp4" },
        ],
    },
    {
        key: "2_aurora_bright",
        title: "Make the aurora brighter",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/2_aurora_bright/1.mp4" },
            { scale: 1, src: "./assets/videos/interactive/2_aurora_bright/2.mp4" },
            { scale: 2, src: "./assets/videos/interactive/2_aurora_bright/3.mp4" },
            { scale: 3, src: "./assets/videos/interactive/2_aurora_bright/4.mp4" },
            { scale: 4, src: "./assets/videos/interactive/2_aurora_bright/5.mp4" },
        ],
    },
    {
        key: "6_snowflake_dense",
        title: "Make the snowflake larger and denser",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/6_snowflake_dense/1.mp4" },
            { scale: 1, src: "./assets/videos/interactive/6_snowflake_dense/2.mp4" },
            { scale: 2, src: "./assets/videos/interactive/6_snowflake_dense/3.mp4" },
            { scale: 3, src: "./assets/videos/interactive/6_snowflake_dense/4.mp4" },
            { scale: 4, src: "./assets/videos/interactive/6_snowflake_dense/5.mp4" },
            { scale: 5, src: "./assets/videos/interactive/6_snowflake_dense/6.mp4" },
        ],
    },
    {
        key: "3_person_old",
        title: "Make the person older",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/3_person_old/2.mp4" },
            { scale: 1, src: "./assets/videos/interactive/3_person_old/3.mp4" },
            { scale: 2, src: "./assets/videos/interactive/3_person_old/4.mp4" },
        ],
    },
    {
        key: "9_explosion_smoky",
        title: "Make the explosion more smoky",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/9_explosion_smoky/1.mp4" },
            { scale: 1, src: "./assets/videos/interactive/9_explosion_smoky/2.mp4" },
            { scale: 2, src: "./assets/videos/interactive/9_explosion_smoky/3.mp4" },
            { scale: 3, src: "./assets/videos/interactive/9_explosion_smoky/4.mp4" },
            { scale: 4, src: "./assets/videos/interactive/9_explosion_smoky/5.mp4" },
        ],
    },
    {
        key: "1_campfire_blue",
        title: "Make the campfire bluer",
        levels: [
            { scale: 0, src: "./assets/videos/interactive/1_campfire_blue/2.mp4" },
            { scale: 1, src: "./assets/videos/interactive/1_campfire_blue/3.mp4" },
            { scale: 2, src: "./assets/videos/interactive/1_campfire_blue/4.mp4" },
            { scale: 3, src: "./assets/videos/interactive/1_campfire_blue/5.mp4" },
            { scale: 4, src: "./assets/videos/interactive/1_campfire_blue/6.mp4" },
        ],
    },
];


$(document).ready(function () {
    category_names = [
        'appearance-slider',
        'motion-slider',
        'compose-sliders',
        'masking',
        'threed-control',
        'failures',
        'traindata',
        'comparisons',
        'model-analysis',
    ];
    for (let i = 0; i < category_names.length; i++) {
        category_name = category_names[i];

        // initialize global-variable active pills
        activeMethodsPill[category_name] = null;
        activeScenesPill[category_name] = null;
        activeModesPill[category_name] = null;

        display_block(category_name);
    }
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    is_mobile = (width <= 768);
    initializeInteractiveTeaser();
});


function onResizeWindow() {
    for (let category_name in category_examples) {
        if (!category_examples[category_name]['is_demo']) {
            video_container = $("#" + category_name + "-video-container");
            if (video_container) {
                video_container.syncer({reset_height: true});
            }
        }
    }
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    is_mobile = (width <= 768);
}


function getSectionTopBottom(section_id) {
    var section = document.getElementById(section_id);
    var rect = section.getBoundingClientRect();
    return {'top': rect.top, 'bottom': rect.bottom};
}


float_navbars = {
    'navbar-apps': ["sec:appearance-slider", "sec:motion-slider", "sec:compose-sliders", "sec:masking"],
    'navbar-method': ["sec:comparison", "sec:framework", "sec:traindata", "sec:threed-control", "sec:model-analysis", "sec:failures"],
}


function updateNavbarsOnScroll() {
    window_height = window.innerHeight;

    for (let navbar_id in float_navbars) {
        let section_ids = float_navbars[navbar_id];
        let navbar = document.getElementById(navbar_id);
        
        var set_navbar = true;
        main_displaying = null;
        for (let i = 0; i < section_ids.length; i++) {
            section_top_bottom = getSectionTopBottom(section_ids[i]);
            section_top = section_top_bottom['top'];
            section_bottom = section_top_bottom['bottom'];

            if (i == 0 && section_top > window_height * 0.05) {
                set_navbar = false;
            }
            if (i == section_ids.length - 1 && section_bottom < window_height / 2) {
                set_navbar = false;
            }
            if (section_top < window_height / 2) {
                main_displaying = section_ids[i];
            }
        }

        if (set_navbar) {
            parent = navbar.parentElement;
            parent_height = parent.getBoundingClientRect().height;
            parent.style.height = parent_height ? parent_height + "px" : "0px";
            navbar.classList.add('navbar-active');
        } else {
            navbar.classList.remove('navbar-active');
        }

        for (let i = 0; i < section_ids.length; i++) {
            btn = document.getElementById(section_ids[i].replace("sec:", "navbar-"));
            btn.classList.remove('active');
        }
        if (main_displaying) {
            main_btn = document.getElementById(main_displaying.replace("sec:", "navbar-"));
            main_btn.classList.add('active');
        }
    }
}


// $(window).scroll(function(){
//     updateNavbarsOnScroll();
// });


function display_block(category_name) {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    is_mobile = (width <= 768);
    div = document.getElementById('div-video-' + category_name);

    if (category_name === 'compose-sliders') {
        renderComposeSlidersBlock(div);
        return;
    }

    if (category_name === 'masking') {
        renderMaskingBlock(div);
        return;
    }

    /******************************************************************************************************************/

    head = `
        <div class="col-2"></div>
        <div class="col-md-8">
        <script>
            activeMethodsPill['${category_name}'] = document.querySelector('.${category_name}-method-pill.active');
            activeScenesPill['${category_name}'] = document.querySelector('.${category_name}-scene-pill.active');
            activeModesPill['${category_name}'] = document.querySelector('.${category_name}-mode-pill.active');
        </script>
        `;

    /******************************************************************************************************************/
    
    scene = `
            <div class="has-text-centered text-center">
                <div class="pill-row scene-pills" id="${category_name}-scene-pills">
    `;
    let num_scenes = category_examples[category_name]['scenes'].length;
    for (let i = 0; i < num_scenes; i++) {
        if (!is_mobile && num_scenes > 10 && i == Math.ceil(num_scenes / 2)) {
            scene += `<br>`;
        }
        example = category_examples[category_name]['scenes'][i];
        active_class = (i == 0) ? 'active' : '';
        scene += `
                <span id="${category_name}-scene-${example}" class="pill ${category_name}-scene-pill ${active_class}" data-value="${example}" onclick="selectVideo('${category_name}', activeMethodsPill['${category_name}'], this, activeModesPill['${category_name}'])">
                    <img class="thumbnail-img" src="assets/thumbnails/${example}.jpg" width="64">
                </span>
        `;
    }
    scene += `
            </div>
    `;

    /******************************************************************************************************************/

    if (category_examples[category_name]['methods'].length == 1 && category_examples[category_name]['methods'][0] == '') {
        display_method_style = 'display: none;';
    } else {
        display_method_style = '';
    }
    method = `
            <div class="text-center" style="color: black; ${display_method_style}" id="${category_name}-method-pills">
                <div class="btn-group btn-group-sm">
    `;
    for (let i = 0; i < category_examples[category_name]['methods'].length; i++) {
        example = category_examples[category_name]['methods'][i];
        if (category_examples[category_name]['method_buttons'] && category_examples[category_name]['method_buttons'][example]) {
            example_display = category_examples[category_name]['method_buttons'][example];
        } else {
            example_display = example;
        }
        active_class = (i == 0) ? 'active' : '';
        method += `
                <span class="button is-normal ${category_name}-method-pill ${active_class}" data-value="${example}" id="${category_name}-method-${example}"
                    onclick="selectVideo('${category_name}', this, activeScenesPill['${category_name}'], activeModesPill['${category_name}'])">
                    ${example_display}
                </span>
        `;
    }
    method += `
                </div>
            </div>
    `;
    /******************************************************************************************************************/

    description = ``;
    if (category_examples[category_name]['description']) {
        description = `
            <div class="has-text-centered description" id="${category_name}-description">
                <span>${category_examples[category_name]['description']}</span>
            </div>
        `;
    }

    method_description = ``;
    if (category_examples[category_name]['method_descriptions'] && category_examples[category_name]['method_descriptions'][example]) {
        method_description = `
            <div class="has-text-centered description" id="${category_name}-method-description">
                <span></span>
            </div>
        `;
    }

    /******************************************************************************************************************/

    if (category_examples[category_name]['modes'].length == 1 && category_examples[category_name]['modes'][0] == '') {
        display_mode_style = 'display: none';
    } else {
        display_mode_style = '';
    }
    mode = `
            <div class="text-center" style="color: black; ${display_mode_style};" id="${category_name}-mode-pills">
                <div class="btn-group btn-group-sm">
    `;
    for (let i = 0; i < category_examples[category_name]['modes'].length; i++) {
        example = category_examples[category_name]['modes'][i];
        if (category_examples[category_name]['mode_labels'] && category_examples[category_name]['mode_labels'][example]) {
            example_display = category_examples[category_name]['mode_labels'][example];
        } else {
            example_display = example;
        }
        active_class = (i == 0) ? 'active' : '';
        mode += `
                <span class="button is-normal ${category_name}-mode-pill ${active_class}" data-value="${example}" id="${category_name}-mode-${example}"
                    onclick="selectVideo('${category_name}', activeMethodsPill['${category_name}'], activeScenesPill['${category_name}'], this)">
                    ${example_display}
                </span>
        `;
    }
    mode += `
                </div>
            </div>
    `;

    /******************************************************************************************************************/

    video_container = `
            <div id="${category_name}-video-container">
            </div>
    `;
    if (category_examples[category_name]['is_demo']) {
        label = `
                <div class='columns' id='${category_name}-labels'>
                    <div class="column has-text-centered demo-video-label">
                        Input
                    </div>
                    <div class="column has-text-centered demo-video-label">
                        Output
                    </div>
                </div>
                <br>
        `;
    } else {
        label = ``;
    }

    /******************************************************************************************************************/

    foot = `
        </div>
        <div class="col-2"></div>
        
    `;
    if (category_examples[category_name]['is_demo']) {
        if (!is_mobile) {
            instruction = `
            <div class='has-text-centered demo-video-instruction'>
                <div class="instruction-centered">
                    <p>
                        <span class="icon">
                            <i class="far fa-hand-point-up"></i>
                        </span>Click video to pause
                        &nbsp;&nbsp;&nbsp;&nbsp;                        
                        <a href="#top"><span class="icon">
                            <i class="fas fa-chevron-up"></i>
                        </span>Back to top</a>
                    </p>
                </div>
            </div>
            `;
        } else {
            instruction = `
            <div class='has-text-centered demo-video-instruction'>
                <div class="instruction-centered">
                    <p>
                        <span class="icon">
                            <i class="far fa-hand-point-up"></i>
                        </span>Touch video to pause
                    </p>
                </div>
            </div>
            `;
        }
        
    } else {
        if (!is_mobile) {
            instruction = `
            <div class='has-text-centered demo-video-instruction'>
                <br>
                <div class="instruction-centered">
                    <p>
                        <span class="icon">
                            <i class="far fa-hand-point-up"></i>
                        </span>Click video to pause
                        &nbsp;&nbsp;&nbsp;
                        <a href="#top"><span class="icon">
                            <i class="fas fa-chevron-up"></i>
                        </span>Back to top</a>
                    </p>
                </div>
            </div>
            `;
        } else {
            instruction = `
            <div class='has-text-centered demo-video-instruction'>
                <div class="instruction-centered">
                    <p>
                        <span class="icon">
                            <i class="far fa-hand-point-up"></i>
                        </span>Touch video to pause
                    </p>
                </div>
            </div>
            `;
        }
    }
    foot += instruction;

    /******************************************************************************************************************/
    div.innerHTML = head + description + method + method_description + mode + scene + video_container + label + foot;
    activeMethodsPill[category_name] = document.querySelector('.' + category_name + '-method-pill.active');
    activeScenesPill[category_name] = document.querySelector('.' + category_name + '-scene-pill.active');
    activeModesPill[category_name] = document.querySelector('.' + category_name + '-mode-pill.active');

    // load default video
    if (category_examples[category_name]['is_demo']) {
        selectVideo(category_name, activeMethodsPill[category_name], activeScenesPill[category_name], activeModesPill[category_name]);
    } else {
        selectVideo(category_name, activeMethodsPill[category_name], activeScenesPill[category_name], activeModesPill[category_name]);
    }

}


function renderComposeSlidersBlock(div) {
    const composeConfig = category_examples['compose-sliders'];
    const rows = Array.isArray(composeConfig.rows) ? composeConfig.rows : [];
    const cols = Array.isArray(composeConfig.cols) ? composeConfig.cols : [];
    const folder = typeof composeConfig.folder === "string" ? composeConfig.folder : "compose-ink";
    const axisTop = Array.isArray(composeConfig.axis_top) ? composeConfig.axis_top : ["Less red", "Ink getting redder", "More red"];
    const axisLeft = Array.isArray(composeConfig.axis_left) ? composeConfig.axis_left : ["More concentrated", "Ink getting diluted", "More diluted"];
    const description = composeConfig.description ? `
        <div class="has-text-centered description" id="compose-sliders-description">
            <span>${composeConfig.description}</span>
        </div>
    ` : "";
    let cellsHTML = "";

    for (let row = 0; row < rows.length; row += 1) {
        for (let col = 0; col < cols.length; col += 1) {
            const filename = String(rows[row]) + String(cols[col]) + ".mp4";
            cellsHTML += `
                <div class="compose-ink-cell">
                    <video class="compose-ink-video" playsinline muted preload="auto">
                        <source src="./assets/videos/${folder}/${filename}" type="video/mp4" />
                    </video>
                </div>
            `;
        }
    }

    div.innerHTML = `
        ${description}
        <div class="compose-ink-board">
            <div class="compose-ink-axis-top">
                <span class="compose-ink-axis-top-spacer" aria-hidden="true"></span>
                <span class="compose-ink-axis-top-start">${axisTop[0] || ""}</span>
                <span class="compose-ink-axis-top-center">${axisTop[1] || ""}</span>
                <span class="compose-ink-axis-top-end">${axisTop[2] || ""}</span>
            </div>
            <div class="compose-ink-layout">
                <div class="compose-ink-axis-left">
                    <span class="compose-ink-axis-left-start">${axisLeft[0] || ""}</span>
                    <span class="compose-ink-axis-left-center">${axisLeft[1] || ""}</span>
                    <span class="compose-ink-axis-left-end">${axisLeft[2] || ""}</span>
                </div>
                <div class="compose-ink-grid">
                    ${cellsHTML}
                </div>
            </div>
        </div>
        <div class='has-text-centered demo-video-instruction compose-ink-instruction'>
            <div class="instruction-centered">
                <p>
                    <span class="icon">
                        <i class="far fa-hand-point-up"></i>
                    </span>Click video to pause
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#top"><span class="icon">
                        <i class="fas fa-chevron-up"></i>
                    </span>Back to top</a>
                </p>
            </div>
        </div>
    `;

    initializeSyncedVideoGrid(div, ".compose-ink-video", "_composeInkSyncTimer");
}


function renderMaskingBlock(div) {
    const maskingConfig = category_examples['masking'];
    const groups = Array.isArray(maskingConfig.groups) ? maskingConfig.groups : [];
    const scaleLabels = Array.isArray(maskingConfig.scale_labels) ? maskingConfig.scale_labels : [];
    const description = maskingConfig.description ? `
        <div class="has-text-centered description" id="masking-description">
            <span>${maskingConfig.description}</span>
        </div>
    ` : "";

    const numGroups = groups.length;
    let rowsHTML = "";
    for (let i = 0; i < numGroups; i += 1) {
        const group = groups[i];
        const arrows = Array.isArray(group.arrows) ? group.arrows : ['#999'];
        const videos = Array.isArray(group.videos) ? group.videos : [];
        const rowBaseDelay = 90 + (i * 130);

        let videosHTML = "";
        for (let j = 0; j < videos.length; j += 1) {
            videosHTML += `
                <div class="masking-video-cell masking-row-item" style="--masking-delay:${rowBaseDelay + 110 + (j * 50)}ms">
                    <video class="masking-video" playsinline muted preload="auto">
                        <source src="./assets/videos/masking/${videos[j]}" type="video/mp4" />
                    </video>
                </div>`;
        }

        const guideTopLabel = group.label_top || group.label || "";
        const guideBottomLabel = group.label_bottom || "";

        const rightArrowColors = arrows.length > 0 ? arrows : ["#64748b"];
        const arrowSpacing = 16;
        const rightArrowHeight = rightArrowColors.length === 1 ? 26 : 26 + ((rightArrowColors.length - 1) * arrowSpacing);
        let rightArrowLines = "";
        for (let a = 0; a < rightArrowColors.length; a += 1) {
            const c = rightArrowColors[a];
            const y = rightArrowColors.length === 1 ? 13 : 7 + (a * arrowSpacing);
            rightArrowLines += `
                <line x1="2" y1="${y}" x2="33" y2="${y}" stroke="rgba(255,255,255,0.96)" stroke-width="6.2" stroke-linecap="round"/>
                <line x1="2" y1="${y}" x2="33" y2="${y}" stroke="${c}" stroke-width="3.2" stroke-linecap="round"/>
                <polygon points="33,${y - 6} 47,${y} 33,${y + 6}" fill="${c}" stroke="rgba(255,255,255,0.96)" stroke-width="1.2"/>
            `;
        }
        const rightArrow = `<svg class="masking-right-arrow" viewBox="0 0 50 ${rightArrowHeight}" aria-hidden="true">
            ${rightArrowLines}
        </svg>`;

        rowsHTML += `
            <div class="masking-guide-cell masking-row-item" style="--masking-delay:${rowBaseDelay + 35}ms">
                <div class="masking-guide-label masking-guide-label-top">${guideTopLabel}</div>
                <div class="masking-guide-img-wrap">
                    <div class="masking-guide-frame">
                        <img class="masking-guide-image" src="./assets/videos/masking/${group.image}" alt="Masking guide ${group.key || ""}" />
                    </div>
                </div>
                ${guideBottomLabel ? `<div class="masking-guide-label masking-guide-label-bottom">${guideBottomLabel}</div>` : ""}
            </div>
            <div class="masking-arrow-lane masking-row-item" style="--masking-delay:${rowBaseDelay + 55}ms">${rightArrow}</div>
            ${videosHTML}`;
    }

    let scaleLabelsHTML = `<div class="masking-scale-spacer"></div><div class="masking-scale-spacer"></div>`;
    for (let i = 0; i < scaleLabels.length; i += 1) {
        scaleLabelsHTML += `<div class="masking-scale-label">${scaleLabels[i]}</div>`;
    }

    div.innerHTML = `
        ${description}
        <div class="masking-board">
            <div class="masking-grid">
                <div class="masking-original-cell">
                    <div class="masking-original-label">original video</div>
                    <div class="masking-original-frame masking-row-item" style="--masking-delay:40ms">
                        <video class="masking-video masking-original-video" playsinline muted preload="auto">
                            <source src="./assets/videos/masking/${maskingConfig.original}" type="video/mp4" />
                        </video>
                    </div>
                </div>
                ${scaleLabelsHTML}
                ${rowsHTML}
            </div>
        </div>
        <div class='has-text-centered demo-video-instruction masking-instruction'>
            <div class="instruction-centered">
                <p>
                    <span class="icon">
                        <i class="far fa-hand-point-up"></i>
                    </span>Click video to pause
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#top"><span class="icon">
                        <i class="fas fa-chevron-up"></i>
                    </span>Back to top</a>
                </p>
            </div>
        </div>
    `;

    initializeSyncedVideoGrid(div, ".masking-video", "_maskingSyncTimer");
}


function initializeSyncedVideoGrid(div, selector, timerKey) {
    const videos = Array.from(div.querySelectorAll(selector));
    const masterVideo = videos.length > 0 ? videos[0] : null;
    let isPlaying = true;
    let initialized = false;

    if (div[timerKey]) {
        clearInterval(div[timerKey]);
        div[timerKey] = null;
    }

    function pauseAll(anchorTime = null) {
        if (videos.length === 0) {
            return;
        }
        const targetTime = anchorTime !== null ? anchorTime : videos[0].currentTime;
        videos.forEach(function (videoEl) {
            videoEl.pause();
            videoEl.currentTime = targetTime;
        });
        if (div[timerKey]) {
            clearInterval(div[timerKey]);
            div[timerKey] = null;
        }
    }

    function syncFollowers(forceSync = false) {
        if (!masterVideo) {
            return;
        }
        const targetTime = masterVideo.currentTime;
        videos.forEach(function (videoEl, index) {
            if (index === 0) {
                return;
            }
            if (forceSync || Math.abs(videoEl.currentTime - targetTime) > 0.08) {
                videoEl.currentTime = targetTime;
            }
            if (isPlaying && videoEl.paused) {
                videoEl.play().catch(function () {});
            }
        });
    }

    function startSyncTimer() {
        if (div[timerKey] || videos.length <= 1) {
            return;
        }
        div[timerKey] = setInterval(function () {
            if (isPlaying) {
                syncFollowers(false);
            }
        }, 250);
    }

    function playAll(anchorTime = null) {
        const targetTime = anchorTime !== null ? anchorTime : (masterVideo ? masterVideo.currentTime : 0);
        videos.forEach(function (videoEl) {
            videoEl.currentTime = targetTime;
            videoEl.play().catch(function () {});
        });
        syncFollowers(true);
        startSyncTimer();
    }

    function togglePlayback(event) {
        const currentVideo = event && event.currentTarget ? event.currentTarget : null;
        if (isPlaying) {
            pauseAll(currentVideo ? currentVideo.currentTime : null);
        } else {
            playAll();
        }
        isPlaying = !isPlaying;
    }

    function initializePlayback() {
        if (initialized || videos.length === 0) {
            return;
        }
        const ready = videos.every(function (videoEl) {
            return videoEl.readyState >= 2;
        });
        if (!ready) {
            return;
        }
        initialized = true;
        playAll(0);
    }

    if (masterVideo) {
        masterVideo.addEventListener("ended", function () {
            if (!isPlaying) {
                return;
            }
            playAll(0);
        });
        masterVideo.addEventListener("seeking", function () {
            syncFollowers(true);
        });
        masterVideo.addEventListener("play", function () {
            if (isPlaying) {
                startSyncTimer();
            }
        });
    }

    videos.forEach(function (videoEl) {
        videoEl.addEventListener("click", togglePlayback);
        videoEl.addEventListener("loadeddata", initializePlayback);
        videoEl.addEventListener("canplay", initializePlayback);
    });

    initializePlayback();
}


function loadDemoVideoContainer(video_container, category_name, scene, method, mode) {
    filename = scene;
    if (method && method != '') {
        filename = `${method}/${filename}`;
    }
    if (mode && mode != '') {
        filename = `${filename}-${mode}`;
    }

    current_filename = category_examples[category_name]['current_scene'];
    if (current_filename == null) {
        video_container.innerHTML = `
            <div class="twentytwenty-container" id="${category_name}-video-twentytwenty">
                <div class="video">
                    <video class="video demo-video" style="width: 100%;" id="${category_name}Video0" loop playsinline autoplay muted>
                        <source src="./assets/videos/${category_name}/${filename}.mp4" />
                    </video>
                </div>
                <div class="video">
                    <video class="video demo-video" style="width: 100%;" id="${category_name}Video1" loop playsinline autoplay muted>
                        <source src="./assets/videos/${category_name}/${filename}-tracks.mp4" />
                    </video>
                </div>
            </div>
        `;
    } else if (current_filename != filename) {
        video_container.innerHTML = video_container.innerHTML.replaceAll(current_filename, filename);
    }
    category_examples[category_name]['current_scene'] = filename;
    var video_active0 = document.getElementById(category_name + "Video0");
    var video_active1 = document.getElementById(category_name + "Video1");

    video_active0.load();
    video_active1.load();
    function _play_together() {
        if (video_active0.readyState >= 4 && video_active1.readyState >= 4) {
            video_active0.play();
            video_active1.play();
        } else {
            setTimeout(_play_together, 100);
        }
    }
    _play_together();

    // Reinitialize twentytwenty if needed
    two_column_ratio = 0.285;
    three_column_ratio = 0.19;
    if (category_examples[category_name]['columns'] == 2) {
        ratio = two_column_ratio;
    } else if (category_examples[category_name]['columns'] == 3) {
        ratio = three_column_ratio;
    } else {
        ratio = two_column_ratio;
    }

    if (window.jQuery && $.fn.twentytwenty) {
        $("#" + category_name + "-video-twentytwenty").twentytwenty({ ratio: ratio, default_offset_pct: 0.999, disable_resize: true, is_mobile: is_mobile  });
    }

    // load labels
    labels = category_examples[category_name]['labels'][scene];
    console.log(labels);
    labels_div = document.getElementById(category_name + "-labels");
    labels_HTML = ""
    for (let i = 0; i < labels.length; i++) {
        labels_HTML += `
            <div class="column has-text-centered demo-video-label">
                ${labels[i]}
            </div>
        `;
    }
    labels_div.innerHTML = labels_HTML;

    // load method description
    if (category_examples[category_name]['method_descriptions'] && category_examples[category_name]['method_descriptions'][method]) {
        method_description_div = document.getElementById(category_name + "-method-description");
        method_description_div.innerHTML = `<span>${category_examples[category_name]['method_descriptions'][method]}</span>`;
    }

}

function loadAppearanceVideoRow(video_container, category_name, scene) {
    const sceneData = category_examples[category_name]['video_groups'][scene];
    const scenePromptMap = category_examples[category_name]['prompts'] || {};
    const scenePrompt = scenePromptMap[scene] || "";
    if (!sceneData || !sceneData.folder || !Array.isArray(sceneData.files)) {
        video_container.innerHTML = "";
        return;
    }

    let innerHTML = `<div class="appearance-video-row">`;
    for (let i = 0; i < sceneData.files.length; i++) {
        const videoPath = `./assets/videos/${category_name}/${sceneData.folder}/${sceneData.files[i]}`;
        innerHTML += `
            <div class="appearance-video-item">
                <video class="comparison-video appearance-video" loop playsinline autoplay muted>
                    <source src="${videoPath}" />
                </video>
            </div>
        `;
    }
    innerHTML += `</div>`;
    if (scenePrompt !== "") {
        innerHTML += `
            <div class="appearance-prompt">
                ${scenePrompt}
            </div>
        `;
    }
    video_container.innerHTML = innerHTML;

    const videos = Array.from(video_container.querySelectorAll("video"));
    let playing = true;

    function pauseAll(anchorTime = null) {
        if (videos.length === 0) {
            return;
        }
        const setTime = (anchorTime !== null) ? anchorTime : videos[0].currentTime;
        for (let i = 0; i < videos.length; i++) {
            videos[i].pause();
            videos[i].currentTime = setTime;
        }
    }

    function playAll() {
        for (let i = 0; i < videos.length; i++) {
            videos[i].play().catch(function () {
                // Ignore autoplay interruptions.
            });
        }
    }

    function toggleAll(event) {
        const target = event && event.currentTarget ? event.currentTarget : null;
        if (playing) {
            pauseAll(target ? target.currentTime : null);
            playing = false;
        } else {
            playAll();
            playing = true;
        }
    }

    for (let i = 0; i < videos.length; i++) {
        videos[i].addEventListener("click", toggleAll);
    }
}

function loadComparisonVideoContainer(video_container, category_name, method_name, pill) {

    label1 = category_examples[category_name]['labels'][pill][0];
    label2 = category_examples[category_name]['method_labels'][method_name];

    current_scene = category_examples[category_name]['current_scene'];
    current_method = category_examples[category_name]['current_method'];

    init_sync = true;

    if (current_scene == null || current_method == null) {
        video_container.innerHTML = `
            <div class="columns">
                <div class="column comparison-video-div">
                    <video class="comparison-video"  loop playsinline muted>
                        <source src="./assets/videos/${category_name}/${pill}/input.mp4" />
                    </video>
                    <div class="has-text-centered demo-video-label">
                        Input
                    </div>
                </div>
                <div class="column comparison-video-div">
                    <video class="comparison-video"  loop playsinline muted id="video-comparison-ref">
                        <source src="./assets/videos/${category_name}/${pill}/ref.mp4" />
                    </video>
                    <div class="has-text-centered demo-video-label">
                        ${label1}
                    </div>
                </div>
            </div>
            <div class="columns">            
                <div class="column comparison-video-div">
                    <video class="comparison-video"  loop playsinline muted id="video-comparison-baseline">
                        <source src="./assets/videos/${category_name}/${pill}/${method_name}.mp4" id="src-comparison-baseline" />
                    </video>
                    <div class="has-text-centered demo-video-label">
                        ${label2}
                    </div>
                </div>
                <div class="column comparison-video-div">
                    <video class="comparison-video"  loop playsinline muted>
                        <source src="./assets/videos/${category_name}/${pill}/Ours.mp4" />
                    </video>
                    <div class="has-text-centered demo-video-label">
                        Ours
                    </div>
                </div>
            </div>
        `;
    } else if (current_method != method_name && current_scene == pill) {
        // only replace the baseline video while keep playing other videos
        document.getElementById('src-comparison-baseline').src = `./assets/videos/${category_name}/${pill}/${method_name}.mp4`;
        vid_baseline_ele = document.getElementById('video-comparison-baseline');
        vid_baseline_ele.load();
        vid_ref_ele = document.getElementById('video-comparison-ref');
        vid_baseline_ele.currentTime = vid_ref_ele.currentTime;
        if (!vid_ref_ele.paused)
            vid_baseline_ele.play();
        init_sync = false;
        
    } else {
        console.log('replace comparison videos');
        video_container.innerHTML = video_container.innerHTML
            .replaceAll(category_examples[category_name]['labels'][current_scene][0], label1)
            .replaceAll(category_examples[category_name]['method_labels'][current_method], label2)
            .replaceAll(current_scene, pill)
            .replaceAll(current_method, method_name);
    }
    category_examples[category_name]['current_scene'] = pill;
    category_examples[category_name]['current_method'] = method_name;
    if (init_sync && window.jQuery && $.fn.syncer) {
        $("#" + category_name + "-video-container").syncer();
    }
}


function loadVideoContainer(video_container, category_name, method_name, scene, mode) {

    innerHTML = ``;
    for (r = 0; r < category_examples[category_name]['method_columns'][method_name].length; r++) {
        innerHTML += `<div class="columns">`;
        for (c = 0; c < category_examples[category_name]['method_columns'][method_name][r].length; c++) {
            col_suffix = category_examples[category_name]['method_columns'][method_name][r][c];
            if (col_suffix == '') {
                col_suffix = mode;
            }
            filename = `${method_name}/${scene}-${col_suffix}`;
            console.log(filename);
            label = col_suffix;
            column_labels = category_examples[category_name]['column_labels'];
            if (column_labels && column_labels[method_name] && column_labels[method_name][scene] && column_labels[method_name][scene][col_suffix]) {
                label = column_labels[method_name][scene][col_suffix];
            }
            innerHTML += `
                <div class="column">
                    <video class="comparison-video"  loop playsinline muted>
                        <source src="./assets/videos/${category_name}/${filename}.mp4" />
                    </video>
                    <div class="has-text-centered demo-video-label">
                        ${label}
                    </div>
                </div>
            `;
        }
        innerHTML += `</div>`;
    }

    video_container.innerHTML = innerHTML;
    if (window.jQuery && $.fn.syncer) {
        $("#" + category_name + "-video-container").syncer({reset_height: true});
    }

    // load method description
    if (category_examples[category_name]['method_descriptions'] && category_examples[category_name]['method_descriptions'][method]) {
        method_description_div = document.getElementById(category_name + "-method-description");
        method_description_div.innerHTML = `<span>${category_examples[category_name]['method_descriptions'][method]}</span>`;
    }
}


function selectVideo(category_name, methodPill, scenePill, modePill) {
    select = true;
    if (category_examples[category_name]["methods"].length > 1 && methodPill.classList.contains("disabled")) {
        return;
    }
    if (activeMethodsPill[category_name]) {
        activeMethodsPill[category_name].classList.remove("active");
    }

    if (activeScenesPill[category_name]) {
        activeScenesPill[category_name].classList.remove("active");
    }

    if (modePill) {
        activeModesPill[category_name].classList.remove("active");
        modePill.classList.add("active");
        activeModesPill[category_name] = modePill;
    }

    activeMethodsPill[category_name] = methodPill;
    activeScenesPill[category_name] = scenePill;
    scenePill.classList.add("active");
    activeMethodsPill[category_name].classList.add("active");
    scene = scenePill.getAttribute("data-value");
    method = activeMethodsPill[category_name].getAttribute("data-value");
    mode = activeModesPill[category_name].getAttribute("data-value");

    scenes = category_examples[category_name]['scenes'];

    modes = category_examples[category_name]['modes'];
    first_active_mode_btn = null;
    if (modes.length > 1 && modes[0] != '') {
        for (let i = 0; i < modes.length; i++) {
            btn_mode = document.getElementById(category_name + "-mode-" + modes[i]);
            enable_modes = category_examples[category_name]['enable_modes'];
            if (enable_modes && enable_modes[method] && !enable_modes[method].includes(modes[i])) {
                btn_mode.style.display = "none";
            } else {
                if (first_active_mode_btn == null) {
                    first_active_mode_btn = btn_mode;
                }
                btn_mode.style.display = "inline-flex";
            }
        }
        document.getElementById(category_name + "-mode-pills").style.display = "block";
        if (modePill.style.display == "none") {
            // select the first available mode
            if (first_active_mode_btn != null) {
                selectVideo(category_name, activeMethodsPill[category_name], activeScenesPill[category_name], first_active_mode_btn);
                return;
            }
            document.getElementById(category_name + "-mode-pills").style.display = "none";
        }
    }

    enable_scenes = category_examples[category_name]['enable_scenes'];
    if (enable_scenes && enable_scenes[method] && enable_scenes[method].length == 1) {
        document.getElementById(category_name + "-scene-pills").style.display = "none";
    } else {
        document.getElementById(category_name + "-scene-pills").style.display = "block";
    }

    first_active_scene_btn = null;
    for (let i = 0; i < scenes.length; i++) {
        btn_scene = document.getElementById(category_name + "-scene-" + scenes[i]);
        if (enable_scenes && enable_scenes[method] && !enable_scenes[method].includes(scenes[i])) {
            btn_scene.style.display = "none";
        } else {
            if (first_active_scene_btn == null) {
                first_active_scene_btn = btn_scene;
            }
            btn_scene.style.display = "inline-flex";
        }
    }
    if (scenePill.style.display == "none") {
        // select the first available scene
        selectVideo(category_name, activeMethodsPill[category_name], first_active_scene_btn, activeModesPill[category_name]);
        return;
    }

    methods = category_examples[category_name]['methods'];
    enable_methods = category_examples[category_name]['enable_methods'];
    first_active_method_btn = null;
    for (let i = 0; i < methods.length; i++) {
        btn_method = document.getElementById(category_name + "-method-" + methods[i]);
        if (enable_methods && enable_methods[scene] && !enable_methods[scene].includes(methods[i])) {
            // btn_method.style.display = "none";
            btn_method.classList.add("disabled");
        } else {
            if (first_active_method_btn == null) {
                first_active_method_btn = btn_method;
            }
            // btn_method.style.display = "inline-flex";
            btn_method.classList.remove("disabled");
        }
    }
    if (methodPill.classList.contains("disabled")) {
        // select the first available method
        selectVideo(category_name, first_active_method_btn, activeScenesPill[category_name], activeModesPill[category_name]);
        return;
    }

    video_container = document.getElementById(category_name + "-video-container");

    if (category_examples[category_name]['is_appearance_gallery']) {
        loadAppearanceVideoRow(video_container, category_name, scene);
    } else if (category_examples[category_name]['is_demo']) {
        loadDemoVideoContainer(video_container, category_name, scene, method, mode);
    } else if (category_examples[category_name]['is_comparison']) {
        loadComparisonVideoContainer(video_container, category_name, method, scene);
    } else {
        loadVideoContainer(video_container, category_name, method, scene, mode);
    }

}


function selectSceneByName(category_name, scene, method=null) {
    if (method == null) {
        method_ele = activeMethodsPill[category_name];
    } else {
        method_ele = document.getElementById(category_name + "-method-" + method);
    }
    selectVideo(
        category_name,
        method_ele,
        document.getElementById(category_name + "-scene-" + scene),
        activeModesPill[category_name]
    );
}

function initializeInteractiveTeaser() {
    const teaserSection = document.getElementById("interactive-teaser-section");
    const track = document.getElementById("teaserTrack");
    const dots = document.getElementById("teaserDots");
    const prevBtn = document.getElementById("teaserPrevBtn");
    const nextBtn = document.getElementById("teaserNextBtn");

    if (!teaserSection || !track || !dots || !prevBtn || !nextBtn) {
        return;
    }

    const sliderItems = (Array.isArray(teaserInteractiveConfig) ? teaserInteractiveConfig : [])
        .map(function (item) {
            const levels = (Array.isArray(item.levels) ? item.levels : [])
                .filter(function (level) {
                    return typeof level.scale === "number" && typeof level.src === "string" && level.src.length > 0;
                })
                .sort(function (a, b) {
                    return a.scale - b.scale;
                });
            return {
                key: typeof item.key === "string" ? item.key : "",
                title: typeof item.title === "string" && item.title.length > 0 ? item.title : "Untitled",
                levels: levels
            };
        })
        .filter(function (item) {
            return item.levels.length > 0;
        });

    if (sliderItems.length === 0) {
        return;
    }

    const cardsPerPage = 3;
    const pages = chunk(sliderItems, cardsPerPage);
    const cardStates = [];
    let currentPage = 0;
    const AUTO_PAGE_MS = 7000;
    let autoPageTimer = null;

    renderPages();
    renderDots();
    updatePaginationUI();

    prevBtn.addEventListener("click", function () {
        goToPage(currentPage - 1);
        touchAutoPaging();
    });
    nextBtn.addEventListener("click", function () {
        goToPage(currentPage + 1);
        touchAutoPaging();
    });

    teaserSection.addEventListener("mouseenter", clearAutoPaging);
    teaserSection.addEventListener("mouseleave", scheduleAutoPaging);

    function chunk(items, size) {
        const result = [];
        for (let i = 0; i < items.length; i += size) {
            result.push(items.slice(i, i + size));
        }
        return result;
    }

    function renderPages() {
        track.innerHTML = "";
        pages.forEach(function (pageItems, pageIdx) {
            const pageEl = document.createElement("div");
            pageEl.className = "teaser-page";
            pageItems.forEach(function (item) {
                pageEl.appendChild(buildCard(item, pageIdx));
            });
            track.appendChild(pageEl);
        });
    }

    function buildCard(item, pageIdx) {
        const card = document.createElement("article");
        card.className = "teaser-slider-card";

        const videoStack = document.createElement("div");
        videoStack.className = "teaser-slider-video-stack";
        const levelVideos = item.levels.map(function (level, idx) {
            const videoEl = document.createElement("video");
            videoEl.className = "teaser-slider-video-layer" + (idx === 0 ? " active" : "");
            videoEl.muted = true;
            videoEl.loop = true;
            videoEl.playsInline = true;
            videoEl.autoplay = true;
            videoEl.preload = "auto";
            videoEl.src = level.src;
            if (idx === 0) {
                videoEl.addEventListener("loadedmetadata", function () {
                    if (videoEl.videoWidth > 0 && videoEl.videoHeight > 0) {
                        videoStack.style.aspectRatio = String(videoEl.videoWidth / videoEl.videoHeight);
                    }
                });
            }
            videoStack.appendChild(videoEl);
            return videoEl;
        });

        const title = document.createElement("div");
        title.className = "teaser-slider-card-title";
        title.textContent = item.title;

        const controls = document.createElement("div");
        controls.className = "teaser-slider-controls";

        const strengthLabel = document.createElement("span");
        strengthLabel.className = "teaser-slider-strength";
        strengthLabel.textContent = "Strength";

        const minusBtn = document.createElement("button");
        minusBtn.className = "teaser-slider-step-btn";
        minusBtn.type = "button";
        minusBtn.textContent = "-";
        minusBtn.setAttribute("aria-label", "Decrease strength");

        const range = document.createElement("input");
        range.className = "teaser-slider-input";
        range.type = "range";
        range.min = String(item.levels[0].scale);
        range.max = String(item.levels[item.levels.length - 1].scale);
        range.step = "0.01";
        range.value = String(item.levels[0].scale);

        const plusBtn = document.createElement("button");
        plusBtn.className = "teaser-slider-step-btn";
        plusBtn.type = "button";
        plusBtn.textContent = "+";
        plusBtn.setAttribute("aria-label", "Increase strength");

        controls.appendChild(strengthLabel);
        controls.appendChild(minusBtn);
        controls.appendChild(range);
        controls.appendChild(plusBtn);

        card.appendChild(videoStack);
        card.appendChild(title);
        card.appendChild(controls);

        let currentDiscrete = 0;
        let rafId = null;
        cardStates.push({ pageIdx: pageIdx, levelVideos: levelVideos });
        updateStepButtons();

        range.addEventListener("input", function () {
            touchAutoPaging();
            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
            rafId = requestAnimationFrame(function () {
                rafId = null;
                const nextDiscrete = toNearestLevelIndex(Number(range.value), item.levels);
                switchVisibleLevel(nextDiscrete);
            });
        });

        range.addEventListener("change", function () {
            const nearest = toNearestLevelIndex(Number(range.value), item.levels);
            range.value = String(item.levels[nearest].scale);
            switchVisibleLevel(nearest);
            touchAutoPaging();
        });

        minusBtn.addEventListener("click", function () {
            const prevIdx = Math.max(0, currentDiscrete - 1);
            range.value = String(item.levels[prevIdx].scale);
            switchVisibleLevel(prevIdx);
            touchAutoPaging();
        });

        plusBtn.addEventListener("click", function () {
            const nextIdx = Math.min(item.levels.length - 1, currentDiscrete + 1);
            range.value = String(item.levels[nextIdx].scale);
            switchVisibleLevel(nextIdx);
            touchAutoPaging();
        });

        return card;

        function switchVisibleLevel(nextDiscrete) {
            if (nextDiscrete === currentDiscrete) {
                return;
            }
            const currentVideo = levelVideos[currentDiscrete];
            const nextVideo = levelVideos[nextDiscrete];
            if (!nextVideo) {
                return;
            }
            nextVideo.play().catch(function () {});
            nextVideo.classList.add("active");
            if (currentVideo && currentVideo !== nextVideo) {
                currentVideo.classList.remove("active");
            }
            currentDiscrete = nextDiscrete;
            updateStepButtons();
        }

        function updateStepButtons() {
            minusBtn.disabled = currentDiscrete <= 0;
            plusBtn.disabled = currentDiscrete >= item.levels.length - 1;
        }
    }

    function toNearestLevelIndex(rawScaleValue, levels) {
        let nearestIdx = 0;
        let bestDistance = Math.abs(levels[0].scale - rawScaleValue);
        for (let i = 1; i < levels.length; i += 1) {
            const distance = Math.abs(levels[i].scale - rawScaleValue);
            if (distance < bestDistance) {
                bestDistance = distance;
                nearestIdx = i;
            }
        }
        return nearestIdx;
    }

    function renderDots() {
        dots.innerHTML = "";
        pages.forEach(function (_, pageIdx) {
            const dotBtn = document.createElement("button");
            dotBtn.className = "teaser-dot";
            dotBtn.type = "button";
            dotBtn.setAttribute("aria-label", "Go to page " + (pageIdx + 1));
            dotBtn.addEventListener("click", function () {
                goToPage(pageIdx);
                touchAutoPaging();
            });
            dots.appendChild(dotBtn);
        });
    }

    function goToPage(nextPage) {
        if (nextPage < 0 || nextPage > pages.length - 1) {
            return;
        }
        currentPage = nextPage;
        updatePaginationUI();
    }

    function updatePaginationUI() {
        track.style.transform = "translateX(-" + (currentPage * 100) + "%)";
        prevBtn.disabled = currentPage === 0;
        nextBtn.disabled = currentPage === pages.length - 1;
        dots.querySelectorAll(".teaser-dot").forEach(function (dot, idx) {
            dot.classList.toggle("active", idx === currentPage);
        });
        updatePagePlayback();
        scheduleAutoPaging();
    }

    function updatePagePlayback() {
        cardStates.forEach(function (state) {
            const isActivePage = state.pageIdx === currentPage;
            state.levelVideos.forEach(function (videoEl) {
                if (isActivePage) {
                    videoEl.play().catch(function () {});
                } else {
                    videoEl.pause();
                }
            });
        });
    }

    function clearAutoPaging() {
        if (autoPageTimer !== null) {
            clearTimeout(autoPageTimer);
            autoPageTimer = null;
        }
    }

    function scheduleAutoPaging() {
        clearAutoPaging();
        if (pages.length <= 1) {
            return;
        }
        autoPageTimer = setTimeout(function () {
            currentPage = (currentPage + 1) % pages.length;
            updatePaginationUI();
        }, AUTO_PAGE_MS);
    }

    function touchAutoPaging() {
        scheduleAutoPaging();
    }
}
