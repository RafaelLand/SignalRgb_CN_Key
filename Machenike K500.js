/* 
Time:2023/2/14
Author: dangc
*/

export function Name() { return "Machenike K500"; }
export function VendorId() { return 0x258A; }
export function ProductId() { return 0x0050; }
export function Publisher() { return "dangc"; }
export function Documentation() { return "gettingstarted/srgbmods-net-info"; }
export function Size() { return [36, 12]; }
export function DefaultPosition(){return [10, 100]; }
export function DefaultScale(){return 12.0}

export function ControllableParameters() {
	return [
		{"property":"shutdownColor", "group":"lighting", "label":"Shutdown Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
		{"property":"LightingMode", "group":"lighting", "label":"Lighting Mode", "type":"combobox", "values":["Canvas", "Forced"], "default":"Canvas"},
		{"property":"forcedColor", "group":"lighting", "label":"Forced Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
	];
}

const vKeyNames = [
    // Linha de Funções
    'ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    'PrtSc', 'Pause', // Adicionais
    
    // Linha de Números
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    
    // Linha QWERTY
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
    
    // Linha ASDF
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
    
    // Linha ZXCV
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
    
    // Teclas modificadoras e espaço
    'Ctrl', 'Win', 'Alt', 'Space', 'AltGr', 'Fn', 'Ctrl', 'Left', 'Down', 'Up', 'Right', 'Insert', 'Del',
    
    // Bloco Numérico
    'NumLock', 'Num7', 'Num8', 'Num9', 'Num/', 'Num4', 'Num5', 'Num6', 'Num*', 'Num1', 'Num2', 'Num3', 'Num0', 'Num.'
];
Código Combinado
Aqui está o código atualizado para o seu teclado maior:

javascript
Copiar código
export function Name() { return "Teclado Personalizado 96%"; }
export function VendorId() { return 0x258A; }
export function ProductId() { return 0x0050; }  // Atualize o ProductId se necessário
export function Publisher() { return "dangc"; }
export function Documentation() { return "gettingstarted/srgbmods-net-info"; }
export function Size() { return [36, 12]; }
export function DefaultPosition() { return [10, 100]; }
export function DefaultScale() { return 12.0 }

export function ControllableParameters() {
    return [
        {"property":"shutdownColor", "group":"lighting", "label":"Shutdown Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
        {"property":"LightingMode", "group":"lighting", "label":"Lighting Mode", "type":"combobox", "values":["Canvas", "Forced"], "default":"Canvas"},
        {"property":"forcedColor", "group":"lighting", "label":"Forced Color", "min":"0", "max":"360", "type":"color", "default":"009bde"},
    ];
}

const vKeyPositions = [
    // Linha de Funções
    [0, 0], [2, 0], [4, 0], [6, 0], [8, 0], [10, 0], [12, 0], [14, 0], [16, 0], [18, 0], [20, 0], [22, 0], [24, 0], // ESC, F1-F12
    [26, 0], [28, 0], // PrtSc, Pause

    // Linha de Números
    [0, 2], [2, 2], [4, 2], [6, 2], [8, 2], [10, 2], [12, 2], [14, 2], [16, 2], [18, 2], [20, 2], [22, 2], [24, 2], // `, 1-0, -, =

    // Linha QWERTY
    [0, 4], [2, 4], [4, 4], [6, 4], [8, 4], [10, 4], [12, 4], [14, 4], [16, 4], [18, 4], [20, 4], [22, 4], [24, 4], // Tab, Q-P, [, ], \

    // Linha ASDF
    [0, 6], [2, 6], [4, 6], [6, 6], [8, 6], [10, 6], [12, 6], [14, 6], [16, 6], [18, 6], [20, 6], [22, 6], // CapsLock, A-L, ;, Enter

    // Linha ZXCV
    [0, 8], [2, 8], [4, 8], [6, 8], [8, 8], [10, 8], [12, 8], [14, 8], [16, 8], [18, 8], [20, 8], [22, 8], // Shift, Z-M, ,, ., /, Shift

    // Teclas modificadoras e espaço
    [0, 10], [2, 10], [4, 10], [6, 10], [8, 10], [10, 10], [12, 10], [14, 10], [16, 10], [18, 10], [20, 10], [22, 10], // Ctrl, Win, Alt, Space, AltGr, Fn, Ctrl

    // Bloco Numérico
    [26, 2], [28, 2], [30, 2], [32, 2], // NumLock, Num/, Num*, Num-
    [26, 4], [28, 4], [30, 4], [32, 4], // Num7, Num8, Num9, Num+
    [26, 6], [28, 6], [30, 6], [32, 6], // Num4, Num5, Num6, Num+
    [26, 8], [28, 8], [30, 8], [32, 8], // Num1, Num2, Num3, Enter
    [28, 10], [30, 10], // Num0, Num.
];


const vKeyNames = [
    // Linha de Funções
    'ESC', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12',
    'PrtSc', 'Pause',
    
    // Linha de Números
    '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    
    // Linha QWERTY
    'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
    
    // Linha ASDF
    'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
    
    // Linha ZXCV
    'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'Shift',
    
    // Teclas modificadoras e espaço
    'Ctrl', 'Win', 'Alt', 'Space', 'AltGr', 'Fn', 'Ctrl', 'Left', 'Down', 'Up', 'Right', 'Insert', 'Del',
    
    // Bloco Numérico
    'NumLock', 'Num/', 'Num*', 'Num-', 'Num7', 'Num8', 'Num9', 'Num+', 'Num4', 'Num5', 'Num6', 'Num+', 'Num1', 'Num2', 'Num3', 'Enter', 'Num0', 'Num.'
];


export function LedNames() {
	return vKeyNames;

}

export function LedPositions() {
	return vKeyPositions;
}

export function Render() {
	sendColors();
	
}

export function Shutdown() {

}

function sendColors(shutdown = false)
{
	let rgbdata = grabColors(shutdown);

	let packet = [0x08,0x0a,0x7a,0x01,0x00,0x00,0x00];

	packet = packet.concat(rgbdata);	
	device.send_report(packet, 520)


}
function grabColors(shutdown) 
{
	let rgbdata = [];
	for(let iIdx = 0; iIdx < vKeyPositions.length; iIdx++)
	{
		let iPxX = vKeyPositions[iIdx][0];
		let iPxY = vKeyPositions[iIdx][1];
		let color;

		if(shutdown)
		{
			color = hexToRgb(shutdownColor);
		}
		else if (LightingMode === "Forced")
		{
			color = hexToRgb(forcedColor);
		}
		else
		{
			color = device.color(iPxX, iPxY);
		}
		rgbdata[iIdx*3] = color[0];
		rgbdata[iIdx*3 + 1] = color[1];
		rgbdata[iIdx*3 + 2] = color[2];
	}
	return rgbdata;
}
function hexToRgb(hex) 
{
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	let colors = [];
	colors[0] = parseInt(result[1], 16);
	colors[1] = parseInt(result[2], 16);
	colors[2] = parseInt(result[3], 16);

	return colors;
}

export function Validate(endpoint) {
	return endpoint.interface === 1 && endpoint.usage === 0x0001 && endpoint.usage_page === 0xff00;
}

export function Image() {
	return "https://m.media-amazon.com/images/I/51zNoaVliBL._AC_SX679_.jpg~";
}
