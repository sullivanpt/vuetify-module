const presetsCDN = {
    'mdi': 'https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css',
    'md': 'https://fonts.googleapis.com/css?family=Material+Icons',
    'fa': 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@latest/css/all.min.css',
    'fa4': 'https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css'
};
export default function setupIcons(preset) {
    this.options.head.link.push({
        rel: 'stylesheet',
        type: 'text/css',
        href: presetsCDN[preset]
    });
}
//# sourceMappingURL=icons.js.map