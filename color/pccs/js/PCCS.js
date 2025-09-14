/* =========================================================================
   PCCS data define
   ------------------------------------------------------------------------- */
(function( window ) {

window.PCCS = {

tonelist:  ["p","p+","ltg","g","dkg", "lt","lt+","sf","d","dk", "b","s","dp", "v"],

tonelist2: [ "v","b","s","dp","lt+","lt","sf","d","dk", "p+","p","ltg","g","dkg"],
tonelist3: [ "p","p+","lt+","lt","b",  "v",  "dp","dk","dkg", "ltg","sf","s","d","g"],

graylist:  [ "W", "ltGy", "mGy", "dkGy", "Bk" ],

huelist:   ["pR","R","yR","rO","O","yO","rY","Y","gY","YG","YG","G",
            "bG","BG","BG","gB","B","B","pB","V","bP","P","rP","RP" ],


// color classes define _______________________________________________________
tones:{
// vivid tone
v:{
	name:       "vivid",
	adjective:  ["冴えた"],
	saturation: 9,
	colors: [
{id:"v1",    l:4.5,m:"10RP 4/13.5",  rgb:[185, 31, 87],rgb16:"b91f57",cmyk:[  0, 84, 53, 28]},
{id:"v2",    l:4.5,m:"4R 4.5/14",    rgb:[208, 47, 72],rgb16:"d02f48",cmyk:[  0, 78, 65, 19]},
{id:"v3",    l:5.0,m:"7R 5/14",      rgb:[221, 68, 59],rgb16:"dd443b",cmyk:[  0, 69, 73, 14]},
{id:"v4",    l:5.5,m:"10R 5.5/14",   rgb:[233, 91, 35],rgb16:"e95b23",cmyk:[  0, 61, 85,  9]},
{id:"v5",    l:6.0,m:"4YR 6/13.5",   rgb:[230,120,  0],rgb16:"e67800",cmyk:[  0, 48,100, 10]},
{id:"v6",    l:7.0,m:"8YR 7/13",     rgb:[244,157,  0],rgb16:"f49d00",cmyk:[  0, 35,100,  5]},
{id:"v7",    l:7.5,m:"2Y 7.5/13",    rgb:[241,181,  0],rgb16:"f1b500",cmyk:[  0, 25,100,  6]},
{id:"v8",    l:8.0,m:"5Y 8/13",      rgb:[238,201,  0],rgb16:"eec900",cmyk:[  0, 16,100,  7]},
{id:"v9",    l:7.5,m:"8Y 7.5/12",    rgb:[210,193,  0],rgb16:"d2c100",cmyk:[  0,  8,100, 18]},
{id:"v10",   l:7.0,m:"3GY 7/12",     rgb:[168,187,  0],rgb16:"a8bb00",cmyk:[ 10,  0,100, 27]},
{id:"v11",   l:6.0,m:"8GY 6/11.5",   rgb:[ 88,169, 29],rgb16:"58a91d",cmyk:[ 48,  0, 83, 34]},
{id:"v12",   l:5.5,m:"3G 5.5/11",    rgb:[  0,161, 90],rgb16:"00a15a",cmyk:[100,  0, 44, 37]},
{id:"v13",   l:5.0,m:"9G 5/10.5",    rgb:[  0,146,110],rgb16:"00926e",cmyk:[100,  0, 24, 43]},
{id:"v14",   l:4.5,m:"5BG 4.5/10",   rgb:[  0,133,127],rgb16:"00857f",cmyk:[100,  0,  4, 48]},
{id:"v15",   l:4.5,m:"10BG 4/10",    rgb:[  0,116,136],rgb16:"007488",cmyk:[100, 15,  0, 47]},
{id:"v16",   l:4.0,m:"5B 4/10",      rgb:[  0,112,155],rgb16:"00709b",cmyk:[100, 27,  0, 40]},
{id:"v17",   l:3.5,m:"10B 3.5/10.5", rgb:[  0, 96,156],rgb16:"00609c",cmyk:[100, 39,  0, 39]},
{id:"v18",   l:3.5,m:"3PB 3.5/11.5", rgb:[  0, 91,165],rgb16:"005ba5",cmyk:[100, 45,  0, 36]},
{id:"v19",   l:3.5,m:"6PB 3.5/11.5", rgb:[ 26, 84,165],rgb16:"1a54a5",cmyk:[ 84, 49,  0, 36]},
{id:"v20",   l:3.5,m:"9PB 3.5/11.5", rgb:[ 83, 74,160],rgb16:"534aa0",cmyk:[ 49, 54,  0, 37]},
{id:"v21",   l:3.5,m:"3P 3.5/11.5",  rgb:[112, 63,150],rgb16:"703f96",cmyk:[ 25, 58,  0, 42]},
{id:"v22",   l:3.5,m:"7P 3.5/11.5",  rgb:[129, 55,138],rgb16:"81378a",cmyk:[  7, 61,  0, 46]},
{id:"v23",   l:3.5,m:"1RP 3.5/11.5", rgb:[143, 46,124],rgb16:"8f2e7c",cmyk:[  0, 68, 14, 44]},
{id:"v24",   l:4.0,m:"6RP 4/12.5",   rgb:[173, 46,108],rgb16:"ad2e6c",cmyk:[  0, 74, 38, 32]}
	]
},

// bright tone
b: {
	name:       "bright",
	adjective:  ["明るい"],
	saturation: 8,
	colors: [
{id:"b2",    l:6.0,m:"4R 6/12",      rgb:[239,108,112],rgb16:"ef6c70",cmyk:[  0, 55, 53,  7]},
{id:"b4",    l:6.5,m:"10R 6.5/11.5", rgb:[250,129, 85],rgb16:"fa8155",cmyk:[  0, 49, 66,  2]},
{id:"b6",    l:7.5,m:"8YR 7.5/11.5", rgb:[255,173, 54],rgb16:"ffad36",cmyk:[  0, 32, 79,  0]},
{id:"b8",    l:8.5,m:"5Y 8.5/11",    rgb:[250,216, 49],rgb16:"fad831",cmyk:[  0, 14, 81,  2]},
{id:"b10",   l:7.5,m:"3GY 7.5/10",   rgb:[183,200, 43],rgb16:"b7c82b",cmyk:[  8,  0, 79, 22]},
{id:"b12",   l:6.5,m:"3G 6.5/9",     rgb:[ 65,184,121],rgb16:"41b879",cmyk:[ 65,  0, 35, 28]},
{id:"b14",   l:6.0,m:"5BG 6/8.5",    rgb:[  0,170,159],rgb16:"00aa9f",cmyk:[100,  0,  6, 34]},
{id:"b16",   l:5.5,m:"5B 5.5/8.5",   rgb:[  0,152,185],rgb16:"0098b9",cmyk:[100, 18,  0, 28]},
{id:"b18",   l:5.0,m:"3PB 5/10",     rgb:[ 41,129,192],rgb16:"2981c0",cmyk:[ 79, 33,  0, 25]},
{id:"b20",   l:5.0,m:"9PB 5/10",     rgb:[117,116,188],rgb16:"7574bc",cmyk:[ 38, 39,  0, 26]},
{id:"b22",   l:5.0,m:"7P 5/10",      rgb:[161,101,168],rgb16:"a165a8",cmyk:[  4, 40,  0, 34]},
{id:"b24",   l:5.5,m:"6RP 5.5/10.5", rgb:[208,103,142],rgb16:"d0678e",cmyk:[  0, 51, 32, 19]}
	]
},

// strong tone
s: {
	name:       "strong",
	adjective:  ["強い"],
	saturation: 8,
	colors: [
{id:"s2",    l:4.5,m:"4R 4.5/12",    rgb:[197, 63, 77],rgb16:"c53f4d",cmyk:[  0, 68, 61, 23]},
{id:"s4",    l:5.0,m:"10R 5/11.5",   rgb:[204, 87, 46],rgb16:"cc572e",cmyk:[  0, 58, 78, 20]},
{id:"s6",    l:6.5,m:"8YR 6.5/11.5", rgb:[225,146, 21],rgb16:"e19215",cmyk:[  0, 35, 91, 12]},
{id:"s8",    l:7.5,m:"5Y 7.5/11",    rgb:[222,188,  3],rgb16:"debc03",cmyk:[  0, 15, 99, 13]},
{id:"s10",   l:6.5,m:"3GY 6.5/10",   rgb:[156,173,  0],rgb16:"9cad00",cmyk:[ 10,  0,100, 32]},
{id:"s12",   l:5.0,m:"3G 5/9",       rgb:[  0,143, 86],rgb16:"008f56",cmyk:[100,  0, 40, 44]},
{id:"s14",   l:4.5,m:"5BG 4.5/8.5",  rgb:[  0,130,124],rgb16:"00827c",cmyk:[100,  0,  4, 49]},
{id:"s16",   l:4.0,m:"5B 4/8.5",     rgb:[  0,111,146],rgb16:"006f92",cmyk:[100, 24,  0, 43]},
{id:"s18",   l:3.5,m:"3PB 3.5/10",   rgb:[  0, 91,155],rgb16:"005b9b",cmyk:[100, 42,  0, 39]},
{id:"s20",   l:3.5,m:"9PB 3.5/10",   rgb:[ 83, 76,152],rgb16:"534c98",cmyk:[ 46, 50,  0, 41]},
{id:"s22",   l:3.5,m:"7P 3.5/10",    rgb:[124, 61,132],rgb16:"7c3d84",cmyk:[  6, 54,  0, 48]},
{id:"s24",   l:4.0,m:"6RP 4/10.5",   rgb:[163, 60,106],rgb16:"a33c6a",cmyk:[  0, 64, 35, 36]}
	]
},

// deep tone
dp: {
	name:       "deep",
	adjective:  ["濃い"],
	saturation: 8,
	colors: [
{id:"dp2",   l:3.5,m:"4R 3.5/11.5",  rgb:[166, 29, 57],rgb16:"a61d39",cmyk:[  0, 83, 66, 35]},
{id:"dp4",   l:4.0,m:"10R 4/11",     rgb:[171, 61, 29],rgb16:"ab3d1d",cmyk:[  0, 64, 83, 33]},
{id:"dp6",   l:5.0,m:"8YR 5/11",     rgb:[177,108,  0],rgb16:"b16c00",cmyk:[  0, 39,100, 31]},
{id:"dp8",   l:6.0,m:"5Y 6/10.5",    rgb:[179,147,  0],rgb16:"b39300",cmyk:[  0, 18,100, 30]},
{id:"dp10",  l:5.0,m:"3GY 5/9.5",    rgb:[116,132,  0],rgb16:"748400",cmyk:[ 12,  0,100, 49]},
{id:"dp12",  l:4.0,m:"3G 4/8",       rgb:[  0,114, 67],rgb16:"007243",cmyk:[100,  0, 41, 55]},
{id:"dp14",  l:3.5,m:"5BG 3.5/8",    rgb:[  0,102,100],rgb16:"006664",cmyk:[100,  0,  3, 60]},
{id:"dp16",  l:3.0,m:"5B 3/8",       rgb:[  0, 84,118],rgb16:"005476",cmyk:[100, 29,  0, 54]},
{id:"dp18",  l:2.5,m:"3PB 2.5/9.5",  rgb:[  0, 66,128],rgb16:"004280",cmyk:[100, 49,  0, 50]},
{id:"dp20",  l:2.5,m:"9PB 2.5/9.5",  rgb:[ 62, 51,123],rgb16:"3e337b",cmyk:[ 50, 59,  0, 52]},
{id:"dp22",  l:2.5,m:"7P 2.5/9.5",   rgb:[ 97, 36,105],rgb16:"612469",cmyk:[  8, 66,  0, 59]},
{id:"dp24",  l:3.0,m:"6RP 3/10",     rgb:[134, 29, 85],rgb16:"861d55",cmyk:[  0, 79, 37, 48]}
	]
},

// light+ tone
"lt+": {
	name:       "light+",
	adjective:  ["浅い"],
	saturation: 6,
	colors: [
{id:"lt+2",  l:7.0,m:"4R 7/8",       rgb:[241,152,150],rgb16:"f19896",cmyk:[  0, 37, 38,  6]},
{id:"lt+4",  l:7.5,m:"10R 7.5/8",    rgb:[255,167,135],rgb16:"ffa787",cmyk:[  0, 35, 47,  0]},
{id:"lt+6",  l:8.0,m:"8YR 8/8",      rgb:[255,190,113],rgb16:"ffbe71",cmyk:[  0, 26, 56,  0]},
{id:"lt+8",  l:8.5,m:"5Y 8.5/7.5",   rgb:[242,217,110],rgb16:"f2d96e",cmyk:[  0, 11, 55,  5]},
{id:"lt+10", l:8.0,m:"3GY 8/7",      rgb:[199,211,109],rgb16:"c7d36d",cmyk:[  5,  0, 48, 18]},
{id:"lt+12", l:7.5,m:"3G 7.5/6",     rgb:[133,206,158],rgb16:"85ce9e",cmyk:[ 36,  0, 23, 19]},
{id:"lt+14", l:7.0,m:"5BG 7/6",      rgb:[ 98,192,181],rgb16:"62c0b5",cmyk:[ 49,  0,  6, 25]},
{id:"lt+16", l:6.5,m:"5B 6.5/6",     rgb:[ 91,175,196],rgb16:"5bafc4",cmyk:[ 54, 11,  0, 23]},
{id:"lt+18", l:6.0,m:"3PB 6/7",      rgb:[108,154,197],rgb16:"6c9ac5",cmyk:[ 45, 22,  0, 23]},
{id:"lt+20", l:6.0,m:"9PB 6/7",      rgb:[144,145,195],rgb16:"9091c3",cmyk:[ 26, 26,  0, 24]},
{id:"lt+22", l:6.0,m:"7P 6/7",       rgb:[176,136,181],rgb16:"b088b5",cmyk:[  2, 25,  0, 29]},
{id:"lt+24", l:6.5,m:"6RP 6.5/7.5",  rgb:[217,142,165],rgb16:"d98ea5",cmyk:[  0, 35, 24, 15]}
	]
},

// light tone
lt: {
	name:       "light",
	adjective:  ["浅い"],
	saturation: 5,
	colors: [
{id:"lt2",   l:7.5,m:"5R 7.5/6.5",   rgb:[246,171,165],rgb16:"f6aba5",cmyk:[  0, 31, 33,  4]},
{id:"lt4",   l:8.0,m:"10R 8/6.5",    rgb:[255,185,158],rgb16:"ffb99e",cmyk:[  0, 28, 38,  0]},
{id:"lt6",   l:8.5,m:"7.5YR 8.5/6.5",rgb:[255,206,144],rgb16:"ffce90",cmyk:[  0, 19, 44,  0]},
{id:"lt8",   l:9.0,m:"5Y 9/6",       rgb:[251,230,143],rgb16:"fbe68f",cmyk:[  0,  8, 43,  2]},
{id:"lt10",  l:8.5,m:"2.5GY 8.5/5",  rgb:[216,223,146],rgb16:"d8df92",cmyk:[  3,  0, 34, 13]},
{id:"lt12",  l:8.0,m:"2.5G 8/5",     rgb:[156,217,172],rgb16:"9cd9ac",cmyk:[ 28,  0, 21, 15]},
{id:"lt14",  l:7.5,m:"5BG 7.5/5",    rgb:[126,204,193],rgb16:"7eccc1",cmyk:[ 38,  0,  5, 20]},
{id:"lt16",  l:7.0,m:"5B 7/5",       rgb:[121,186,202],rgb16:"79baca",cmyk:[ 40,  8,  0, 21]},
{id:"lt18",  l:6.5,m:"2.5PB 6.5/5.5",rgb:[131,167,200],rgb16:"83a7c8",cmyk:[ 35, 16,  0, 22]},
{id:"lt20",  l:6.5,m:"10PB 6.5/5.5", rgb:[162,159,199],rgb16:"a29fc7",cmyk:[ 19, 20,  0, 22]},
{id:"lt22",  l:6.5,m:"7.5P 6.5/5",   rgb:[184,154,184],rgb16:"b89ab8",cmyk:[  0, 16,  0, 28]},
{id:"lt24",  l:7.0,m:"5RP 7/6",      rgb:[218,160,179],rgb16:"daa0b3",cmyk:[  0, 27, 18, 15]}
	]
},

// soft tone
sf: {
	name:       "soft",
	adjective:  ["やわらかい"],
	saturation: 5,
	colors: [
{id:"sf2",   l:6.0,m:"4R 6/6.5",     rgb:[202,130,129],rgb16:"ca8281",cmyk:[  0, 36, 36, 21]},
{id:"sf4",   l:6.5,m:"10R 6.5/6.5",  rgb:[218,146,122],rgb16:"da927a",cmyk:[  0, 33, 44, 15]},
{id:"sf6",   l:7.0,m:"8YR 7/6.5",    rgb:[219,166,107],rgb16:"dba66b",cmyk:[  0, 24, 51, 14]},
{id:"sf8",   l:7.5,m:"5Y 7.5/6",     rgb:[211,189,108],rgb16:"d3bd6c",cmyk:[  0, 10, 49, 17]},
{id:"sf10",  l:7.0,m:"3GY 7/5.5",    rgb:[173,182,107],rgb16:"adb66b",cmyk:[  5,  0, 42, 29]},
{id:"sf12",  l:6.5,m:"3G 6.5/5",     rgb:[118,177,138],rgb16:"76b18a",cmyk:[ 34,  0, 22, 31]},
{id:"sf14",  l:6.0,m:"5BG 6/5",      rgb:[ 84,163,155],rgb16:"54a39b",cmyk:[ 48,  0,  5, 36]},
{id:"sf16",  l:5.5,m:"5B 5.5/5",     rgb:[ 81,146,164],rgb16:"5192a4",cmyk:[ 51, 11,  0, 36]},
{id:"sf18",  l:5.0,m:"3PB 5/5.5",    rgb:[ 93,126,160],rgb16:"5d7ea0",cmyk:[ 42, 21,  0, 37]},
{id:"sf20",  l:5.0,m:"9PB 5/5.5",    rgb:[120,120,160],rgb16:"7878a0",cmyk:[ 25, 25,  0, 38]},
{id:"sf22",  l:5.0,m:"7P 5/5.5",     rgb:[144,113,148],rgb16:"907194",cmyk:[  2, 24,  0, 42]},
{id:"sf24",  l:5.5,m:"6RP 5.5/6",    rgb:[180,120,139],rgb16:"b4788b",cmyk:[  0, 34, 23, 30]}
	]
},

// dull tone
d: {
	name:       "dull",
	adjective:  ["にぶい"],
	saturation: 5,
	colors: [
{id:"d2",    l:4.5,m:"4R 4.5/6.5",   rgb:[163, 90, 92],rgb16:"a35a5c",cmyk:[  0, 45, 44, 36]},
{id:"d4",    l:5.0,m:"10R 5/6.5",    rgb:[175,105, 84],rgb16:"af6954",cmyk:[  0, 40, 52, 31]},
{id:"d6",    l:5.5,m:"8YR 5.5/6.5",  rgb:[179,127, 70],rgb16:"b37f46",cmyk:[  0, 29, 61, 30]},
{id:"d8",    l:6.0,m:"5Y 6/6",       rgb:[171,148, 70],rgb16:"ab9446",cmyk:[  0, 13, 59, 33]},
{id:"d10",   l:5.5,m:"3GY 5.5/5.5",  rgb:[133,143, 70],rgb16:"858f46",cmyk:[  7,  0, 51, 44]},
{id:"d12",   l:5.0,m:"3G 5/5",       rgb:[ 79,135,102],rgb16:"4f8766",cmyk:[ 41,  0, 25, 47]},
{id:"d14",   l:4.5,m:"5BG 4.5/5",    rgb:[ 42,123,118],rgb16:"2a7b76",cmyk:[ 66,  0,  4, 52]},
{id:"d16",   l:4.0,m:"5B 4/5",       rgb:[ 36,106,125],rgb16:"246a7d",cmyk:[ 72, 16,  0, 51]},
{id:"d18",   l:3.5,m:"3PB 3.5/5.5",  rgb:[ 52, 89,125],rgb16:"34597d",cmyk:[ 59, 29,  0, 51]},
{id:"d20",   l:3.5,m:"9PB 3.5/5.5",  rgb:[ 84, 82,124],rgb16:"54527c",cmyk:[ 32, 34,  0, 51]},
{id:"d22",   l:3.5,m:"7P 3.5/5.5",   rgb:[108, 74,113],rgb16:"6c4a71",cmyk:[  4, 35,  0, 56]},
{id:"d24",   l:4.0,m:"6RP 4/6",      rgb:[139, 79,101],rgb16:"8b4f65",cmyk:[  0, 43, 27, 46]}
	]
},

// dark tone
dk: {
	name:       "dark",
	adjective:  ["暗い"],
	saturation: 5,
	colors: [
{id:"dk2",   l:2.5,m:"4R 2.5/6",     rgb:[105, 41, 52],rgb16:"692934",cmyk:[  0, 61, 51, 59]},
{id:"dk4",   l:3.0,m:"10R 3/6",      rgb:[117, 54, 42],rgb16:"75362a",cmyk:[  0, 54, 64, 54]},
{id:"dk6",   l:3.5,m:"8YR 3.5/6",    rgb:[121, 77, 28],rgb16:"794d1c",cmyk:[  0, 37, 77, 53]},
{id:"dk8",   l:4.0,m:"5Y 4/5.5",     rgb:[116, 96, 31],rgb16:"74601f",cmyk:[  0, 17, 74, 55]},
{id:"dk10",  l:3.5,m:"3GY 3.5/5",    rgb:[ 82, 91, 32],rgb16:"525b20",cmyk:[ 10,  0, 66, 64]},
{id:"dk12",  l:3.0,m:"3G 3/4.5",     rgb:[ 35, 82, 58],rgb16:"23523a",cmyk:[ 58,  0, 30, 68]},
{id:"dk14",  l:2.5,m:"5BG 2.5/4.5",  rgb:[  0, 71, 70],rgb16:"004746",cmyk:[100,  0,  1, 72]},
{id:"dk16",  l:2.5,m:"5B 2.5/4.5",   rgb:[  0, 69, 88],rgb16:"004558",cmyk:[100, 21,  0, 66]},
{id:"dk18",  l:2.0,m:"3PB 2/5",      rgb:[ 18, 52, 82],rgb16:"123452",cmyk:[ 79, 37,  0, 68]},
{id:"dk20",  l:2.0,m:"9PB 2/5",      rgb:[ 50, 45, 81],rgb16:"322d51",cmyk:[ 39, 44,  0, 68]},
{id:"dk22",  l:2.0,m:"7P 2/5",       rgb:[ 67, 40, 72],rgb16:"432848",cmyk:[  6, 45,  0, 72]},
{id:"dk24",  l:2.5,m:"6RP 2.5/5.5",  rgb:[ 97, 45, 70],rgb16:"612d46",cmyk:[  0, 54, 28, 62]}
	]
},

// pale+ tone
"p+": {
	name:       "pale+",
	adjective:  ["うすい"],
	saturation: 3,
	colors: [
{id:"p+2",   l:8.0,m:"4R 8/3.5",     rgb:[232,194,191],rgb16:"e8c2bf",cmyk:[  0, 17, 18,  9]},
{id:"p+4",   l:8.0,m:"10R 8/3.5",    rgb:[235,194,181],rgb16:"ebc2b5",cmyk:[  0, 17, 23,  8]},
{id:"p+6",   l:8.5,m:"8YR 8.5/3.5",  rgb:[244,212,176],rgb16:"f4d4b0",cmyk:[  0, 13, 28,  4]},
{id:"p+8",   l:9.0,m:"5Y 9/3",       rgb:[242,230,184],rgb16:"f2e6b8",cmyk:[  0,  5, 24,  5]},
{id:"p+10",  l:8.5,m:"3GY 8.5/3",    rgb:[216,221,173],rgb16:"d8ddad",cmyk:[  2,  0, 22, 14]},
{id:"p+12",  l:8.0,m:"3G 8/3",       rgb:[174,212,185],rgb16:"aed4b9",cmyk:[ 18,  0, 13, 17]},
{id:"p+14",  l:8.0,m:"5BG 8/3",      rgb:[166,212,204],rgb16:"a6d4cc",cmyk:[ 22,  0,  4, 17]},
{id:"p+16",  l:7.5,m:"5B 8/3",       rgb:[173,209,218],rgb16:"add1da",cmyk:[ 21,  4,  0, 15]},
{id:"p+18",  l:7.5,m:"3PB 7.5/3",    rgb:[175,192,209],rgb16:"afc0d1",cmyk:[ 16,  8,  0, 18]},
{id:"p+20",  l:7.5,m:"9PB 7.5/3",    rgb:[187,189,208],rgb16:"bbbdd0",cmyk:[ 10,  9,  0, 19]},
{id:"p+22",  l:7.5,m:"7P 7.5/3",     rgb:[200,185,201],rgb16:"c8b9c9",cmyk:[  1,  8,  0, 21]},
{id:"p+24",  l:7.5,m:"6RP 8/3",      rgb:[222,196,202],rgb16:"dec4ca",cmyk:[  0, 12,  9, 13]}
	]
},

// pale tone
p: {
	name:       "pale",
	adjective:  ["うすい"],
	saturation: 2,
	colors: [
{id:"p2",    l:8.5,m:"4R 8.5/2",     rgb:[231,213,212],rgb16:"e7d5d4",cmyk:[  0,  8,  8, 10]},
{id:"p4",    l:8.5,m:"10R 8.5/2",    rgb:[233,213,207],rgb16:"e9d5cf",cmyk:[  0,  9, 11,  9]},
{id:"p6",    l:9.0,m:"8YR 9/2",      rgb:[246,227,206],rgb16:"f6e3ce",cmyk:[  0,  8, 16,  4]},
{id:"p8",    l:9.0,m:"5Y 9/2",       rgb:[239,230,198],rgb16:"efe6c6",cmyk:[  0,  4, 17,  7]},
{id:"p10",   l:9.0,m:"3GY 9/2",      rgb:[230,233,198],rgb16:"e6e9c6",cmyk:[  1,  0, 15,  9]},
{id:"p12",   l:8.5,m:"3G 8.5/2",     rgb:[196,224,203],rgb16:"c4e0cb",cmyk:[ 12,  0,  9, 12]},
{id:"p14",   l:8.5,m:"5BG 8.5/2",    rgb:[191,224,217],rgb16:"bfe0d9",cmyk:[ 15,  0,  3, 12]},
{id:"p16",   l:8.5,m:"5B 8.5/2",     rgb:[198,221,226],rgb16:"c6dde2",cmyk:[ 12,  2,  0, 12]},
{id:"p18",   l:8.0,m:"3PB 8/2",      rgb:[194,204,213],rgb16:"c2ccd5",cmyk:[  9,  5,  0, 17]},
{id:"p20",   l:8.0,m:"9PB 8/2",      rgb:[201,202,213],rgb16:"c9cad5",cmyk:[  5,  5,  0, 17]},
{id:"p22",   l:8.0,m:"7P 8/2",       rgb:[208,200,209],rgb16:"d0c8d1",cmyk:[  0,  4,  0, 18]},
{id:"p24",   l:8.5,m:"6RP 8.5/2",    rgb:[228,213,217],rgb16:"e4d5d9",cmyk:[  0,  6,  5, 11]}
	]
},

// light Grayish
ltg: {
	name:       "light grayish",
	adjective:  ["明るい灰みの"],
	saturation: 2,
	colors: [
{id:"ltg2",  l:7.0,m:"4R 7/2",       rgb:[192,171,170],rgb16:"c0abaa",cmyk:[  0, 11, 11, 25]},
{id:"ltg4",  l:7.0,m:"10R 7/2",      rgb:[193,171,165],rgb16:"c1aba5",cmyk:[  0, 12, 15, 24]},
{id:"ltg6",  l:7.5,m:"8YR 7.5/2",    rgb:[206,187,168],rgb16:"cebba8",cmyk:[  0,  9, 18, 19]},
{id:"ltg8",  l:7.5,m:"5Y 7.5/2",     rgb:[198,190,161],rgb16:"c6bea1",cmyk:[  0,  4, 19, 22]},
{id:"ltg10", l:7.5,m:"3GY 7.5/2",    rgb:[189,193,162],rgb16:"bdc1a2",cmyk:[  2,  0, 16, 25]},
{id:"ltg12", l:7.0,m:"3G 7/2",       rgb:[157,182,165],rgb16:"9db6a5",cmyk:[ 14,  0, 10, 29]},
{id:"ltg14", l:7.0,m:"5BG 7/2",      rgb:[152,182,177],rgb16:"98b6b1",cmyk:[ 17,  0,  3, 29]},
{id:"ltg16", l:7.0,m:"5B 7/2",       rgb:[158,180,185],rgb16:"9eb4b9",cmyk:[ 15,  3,  0, 27]},
{id:"ltg18", l:6.5,m:"3PB 6.5/2",    rgb:[155,165,175],rgb16:"9ba5af",cmyk:[ 12,  6,  0, 32]},
{id:"ltg20", l:6.5,m:"9PB 6.5/2",    rgb:[162,162,175],rgb16:"a2a2af",cmyk:[  7,  7,  0, 32]},
{id:"ltg22", l:6.5,m:"7P 6.5/2",     rgb:[171,160,171],rgb16:"aba0ab",cmyk:[  0,  6,  0, 33]},
{id:"ltg24", l:7.0,m:"6RP 7/2",      rgb:[189,172,176],rgb16:"bdacb0",cmyk:[  0,  9,  7, 26]}
	]
},

// grayish
g: {
	name:       "grayish",
	adjective:  ["灰みの"],
	saturation: 2,
	colors: [
{id:"g2",    l:4.0,m:"4R 4/2",       rgb:[116, 92, 92],rgb16:"745c5c",cmyk:[  0, 21, 21, 55]},
{id:"g4",    l:4.0,m:"10R 4/2",      rgb:[117, 92, 87],rgb16:"755c57",cmyk:[  0, 21, 26, 54]},
{id:"g6",    l:4.5,m:"8YR 4.5/2",    rgb:[128,108, 92],rgb16:"806c5c",cmyk:[  0, 15, 28, 50]},
{id:"g8",    l:4.5,m:"5Y 4.5/2",     rgb:[120,111, 87],rgb16:"786f57",cmyk:[  0,  7, 27, 53]},
{id:"g10",   l:4.5,m:"3GY 4.5/2",    rgb:[110,114, 90],rgb16:"6e725a",cmyk:[  4,  0, 21, 56]},
{id:"g12",   l:4.0,m:"3G 4/2",       rgb:[ 83,102, 90],rgb16:"53665a",cmyk:[ 19,  0, 12, 60]},
{id:"g14",   l:4.0,m:"5BG 4/2",      rgb:[ 78,103,100],rgb16:"4e6764",cmyk:[ 24,  0,  2, 60]},
{id:"g16",   l:4.0,m:"5B 4/2",       rgb:[ 79,101,108],rgb16:"4f656c",cmyk:[ 27,  6,  0, 58]},
{id:"g18",   l:3.5,m:"3PB 3.5/2",    rgb:[ 76, 87,101],rgb16:"4c5765",cmyk:[ 25, 14,  0, 61]},
{id:"g20",   l:3.5,m:"9PB 3.5/2",    rgb:[ 86, 85,102],rgb16:"565566",cmyk:[ 16, 17,  0, 60]},
{id:"g22",   l:3.5,m:"7P 3.5/2",     rgb:[ 96, 82, 98],rgb16:"605262",cmyk:[  2, 16,  0, 62]},
{id:"g24",   l:4.0,m:"6RP 4/2",      rgb:[114, 92, 99],rgb16:"725c63",cmyk:[  0, 19, 13, 56]}
	]
},

// dark Grayish
dkg: {
	name:       "dark grayish",
	adjective:  ["暗い灰みの"],
	saturation: 2,
	colors: [
{id:"dkg2",  l:2.0,m:"4R 2/1.5",     rgb:[ 62, 45, 48],rgb16:"3e2d30",cmyk:[  0, 27, 24, 76]},
{id:"dkg4",  l:2.0,m:"10R 2/1.5",    rgb:[ 63, 46, 44],rgb16:"3f2e2c",cmyk:[  0, 27, 30, 76]},
{id:"dkg6",  l:2.5,m:"8YR 2.5/1.5",  rgb:[ 74, 60, 50],rgb16:"4a3c32",cmyk:[  0, 19, 32, 71]},
{id:"dkg8",  l:2.5,m:"5Y 2.5/1.5",   rgb:[ 68, 62, 48],rgb16:"443e30",cmyk:[  0,  9, 30, 73]},
{id:"dkg10", l:2.5,m:"3GY 2.5/1.5",  rgb:[ 61, 64, 51],rgb16:"3d4033",cmyk:[  4,  0, 21, 75]},
{id:"dkg12", l:2.0,m:"3G 2/1.5",     rgb:[ 42, 52, 46],rgb16:"2a342e",cmyk:[ 19,  0, 12, 80]},
{id:"dkg14", l:2.0,m:"5BG 2/1.5",    rgb:[ 39, 52, 52],rgb16:"273434",cmyk:[ 26,  0,  1, 80]},
{id:"dkg16", l:2.0,m:"5B 2/1.5",     rgb:[ 39, 52, 57],rgb16:"273439",cmyk:[ 31,  9,  0, 78]},
{id:"dkg18", l:1.5,m:"3PB 1.5/1.5",  rgb:[ 34, 41, 51],rgb16:"222933",cmyk:[ 34, 20,  0, 80]},
{id:"dkg20", l:1.5,m:"9PB 1.5/1.5",  rgb:[ 41, 39, 52],rgb16:"292734",cmyk:[ 21, 24,  0, 80]},
{id:"dkg22", l:1.5,m:"7P 1.5/1.5",   rgb:[ 48, 37, 49],rgb16:"302531",cmyk:[  4, 25,  0, 81]},
{id:"dkg24", l:2.0,m:"6RP 2/1.5",    rgb:[ 61, 46, 52],rgb16:"3d2e34",cmyk:[  0, 25, 14, 76]}
	]
},

// monotone -----
W: {
	name:       "white",
	adjective:  ["白"],
	saturation: 0,
	colors: [
{id:"Gy-9.5",l:9.5,m:"N 9.5",        rgb:[241,241,241],rgb16:"f1f1f1",cmyk:[  0,  0,  0,  6]}
	]
},

ltGy: {
	name:       "light gray",
	adjective:  ["明るい灰色"],
	saturation: 0,
	colors: [
{id:"Gy-7.5",l:7.5,m:"N 7.5",        rgb:[187,187,187],rgb16:"bbbbbb",cmyk:[  0,  0,  0, 27]},
{id:"Gy-8.5",l:8.5,m:"N 8.5",        rgb:[214,214,214],rgb16:"d6d6d6",cmyk:[  0,  0,  0, 16]}
	]
},

mGy: {
	name:       "medium gray",
	adjective:  ["灰色"],
	saturation: 0,
	colors: [
{id:"Gy-4.5",l:4.5,m:"N 4.5",        rgb:[109,109,109],rgb16:"6d6d6d",cmyk:[  0,  0,  0, 57]},
{id:"Gy-5.5",l:5.5,m:"N 5.5",        rgb:[135,135,135],rgb16:"878787",cmyk:[  0,  0,  0, 47]},
{id:"Gy-6.5",l:6.5,m:"N 6.5",        rgb:[161,161,161],rgb16:"a1a1a1",cmyk:[  0,  0,  0, 37]}
	 ]
},

dkGy: {
	name:       "dark gray",
	adjective:  ["暗い灰色"],
	saturation: 0,
	colors: [
{id:"Gy-2.5",l:2.5,m:"N 2.5",        rgb:[ 60, 60, 60],rgb16:"3c3c3c",cmyk:[  0,  0,  0, 77]},
{id:"Gy-3.5",l:3.5,m:"N 3.5",        rgb:[ 84, 84, 84],rgb16:"545454",cmyk:[  0,  0,  0, 67]}
	 ]
},

Bk: {
	name:       "black",
	adjective:  ["黒"],
	saturation: 0,
	colors: [
{id:"Gy-1.5",l:1.5,m:"N 1.5",        rgb:[ 39, 39, 39],rgb16:"272727",cmyk:[  0,  0,  0, 85]}
	 ]
}

}
// color classes ends
};

})(window);


/* =========================================================================
   PCCSColor class
   ------------------------------------------------------------------------- */
function PCCSColor(){
	this.initialize.apply(this, arguments);
}

PCCSColor.prototype.initialize = function(colname)
{
	var _re_gray = /^Gy-([1-9]\.5)$/;
	var _re_tone = /^(p|p\+|ltg|g|dkg|lt|lt\+|sf|d|dk|b|s|dp|v)(\d+)$/;

	// Color name validation check and get an object of color data.
	var o       = null, // object ref of color basic data in PCCS data.
	    tsign   = "",   // Tone sign.
	    degree  = 0,    // degree no of hue in a tone.
	    index   = 0,    // index number of a color object array
	    is_gray = 0;    // flag of monotone;
	try {
		if ( colname.match(_re_gray) ){
			is_gray = 1;
			var l = RegExp.$1;
			if ( l == 9.5 ){
				tsign = "W";
				index = 0;
				o = PCCS.tones.W.colors[0];
			} else if ( l >= 7.5 ){
				tsign = "ltGy";
				index = l-7.5;
				o = PCCS.tones.ltGy.colors[index];
			} else if ( l >= 4.0 ){
				tsign = "mGy";
				index = l-4.5;
				o = PCCS.tones.mGy.colors[index];
			} else if ( l >= 2.0 ){
				tsign = "dkGy";
				index = l-2.5;
				o = PCCS.tones.dkGy.colors[index];
			} else {
				tsign = "Bk";
				index = 0;
				o = PCCS.tones.Bk.colors[0];
			}
		}
		else if ( colname.match(_re_tone) ){
			tsign  = RegExp.$1;
			degree = RegExp.$2;
			if ( tsign == "v" ){
				if ( degree < 1 || degree > 24 ){
					throw "ERROR: Color number is out of range for "+colname;
				}
				index = degree-1;
				o = PCCS.tones[tsign].colors[index];
			} else {
				if ( degree < 2 || degree > 24 || degree%2 ){
					throw "ERROR: Color number is out of range or unspported for "+colname;
				}
				index = degree/2-1;
				o = PCCS.tones[tsign].colors[index];
			}
		} else {
			throw "ERROR: Unsupported color name for "+colname;
		}
	}
	catch (e){
		alert(e);
		return null;
	}

//	console.log('-- proceeding about '+colname +", "+tsign);
	this.name          = colname;		// tone code like; p+24, Gy-5.5
	this.is_gray       = is_gray;
	this.toneSign      = tsign;			// tone sign like; p, p+, W, mGy
	this.lightness     = o.l;
	this.indexOfArray  = index;

	if ( is_gray ){
		this.PCCSCode  = "n-"+o.l;

	} else {
		this.hueIndex  = degree;	// 1 to 24 or 2 to 24 by 2
		this.hueName   = degree+':'+PCCS.huelist[degree-1];	// like 2:R, 8:Y, 19:pB
		this.hueRadianNo = degree<=14? (14-degree): (23-(degree-15)); // 2pi*(hueRadianNo/24) rad
		// like; 2:R-4.5-9s
		this.PCCSCode  = ( this.hueName+'-'+this.lightness+'-'+PCCS.tones[tsign].saturation+'s');
	}

	this.MunsellCode   = o.m;
	this.rgb           = o.rgb;
	this.rgbHex        = o.rgb16
	this.cmyk          = o.cmyk;
};


/* =========================================================================
   PCCSTone class
   ------------------------------------------------------------------------- */
function PCCSTone(){
	this.initialize.apply(this, arguments);
}

PCCSTone.prototype.initialize = function(tonesign)
{
	var _re_gray = /^(W|ltGy|mGy|dkGy|Bk)$/;
	var _re_tone = /^(p|p\+|ltg|g|dkg|lt|lt\+|sf|d|dk|b|s|dp|v)$/;

	// Tone name validation check and get an object
	var o       = null, // object ref of color basic data in PCCS data.
	    is_gray = 0;    // flag of monotone;
	if ( tonesign.match(_re_gray) ){
		is_gray = 1;
		o = PCCS.tones[tonesign];
	}
	else if ( tonesign.match(_re_tone)  )
	{
		o = PCCS.tones[tonesign];
	}
	else {
		alert("ERROR: Undefined tone name for "+tonename);
		return null;
	}

//	console.log('- proceeding about '+tonesign);
	this.sign       = tonesign;	// like; p, p+, W
	this.name       = o.name;	// like; pale, light+, black
	this.adjectives = o.adjective;
	this.saturation = o.saturation;
	this.is_gray    = is_gray;

	this.colors  = new Array();
	for (var i=0; i<o.colors.length; i++){
		this.colors[i] = new PCCSColor( o.colors[i].id );
	}
	if ( is_gray ){
		if ( tonesign == "W" ){
			this.mlightness = 9.5;
		} else if ( tonesign == "ltGy" ){
			this.mlightness = 8.0;
		} else if ( tonesign == "mGy" ){
			this.mlightness = 5.5;
		} else if ( tonesign == "dkGy" ){
			this.mlightness = 3.0;
		} else if ( tonesign == "Bk" ){
			this.mlightness = 1.5;
		}
	} else {
		this.mlightness = this.colors[ (tonesign == "v")? 1:0 ].lightness;	// lightness of 2:R;
	}
};


