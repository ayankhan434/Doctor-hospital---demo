import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'], theme: { extend: { colors: { ink:'#0b1f33', navy:'#123451', mist:'#f4f8fb', aqua:'#dff4f2', teal:'#157a78' }, boxShadow: { soft:'0 20px 60px rgba(11,31,51,.10)' } } }, plugins: [] };
export default config;
