export function sanitizeText(textoConHTML: string) {
    const elementoTemporal = document.createElement('div');
    elementoTemporal.innerHTML = textoConHTML;
    return elementoTemporal.textContent || elementoTemporal.innerText || '';
}