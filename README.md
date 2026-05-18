# Proxomind Labs Website

Medical software landing site for Proxomind Labs.

## Positioning

Proxomind Labs builds software for hospitals, diagnostic centers, radiology teams, and equipment dealers.

Current and planned product family:

- ProxoPACS: live cloud PACS and DICOM workflow platform
- ProxoAI: live medical AI agent for report analysis and image analysis support
- ProxoLIMS: upcoming laboratory workflow product
- ProxoRIS: upcoming radiology information workflow product
- TeleReporting: upcoming remote reporting workflow

The site does not position Proxomind as a hardware equipment seller. It supports software workflows around existing MRI, CT, X-ray, ultrasound, and other diagnostic equipment.

## Stack

- React + TypeScript
- Vite
- React Router
- Three.js with React Three Fiber
- EmailJS contact forms
- Custom CSS in `src/styles/global.css`

## Pages

- `/` home and platform overview
- `/products` product family details
- `/dealers` dealer-focused positioning
- `/contact` inquiry form
- `/ai-consulting` redirects to `/products`

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contact Form

The contact form uses EmailJS. Configure these variables for production:

```bash
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

Primary contact email shown on the site: `contact@proxomind.com`.
