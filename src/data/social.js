/**
 * Social / messaging links shown in the footer.
 *
 * Only entries with a real `href` are rendered — this keeps the footer from
 * shipping dead links that quietly point nowhere. Fill in a URL below and
 * the icon appears automatically; leave it blank and it stays hidden.
 *
 * Business contact number used for WhatsApp and click-to-call links.
 */

export const phoneNumber = '9871165133';
export const whatsappLink = `https://wa.me/91${phoneNumber}`;
export const callLink = `tel:+91${phoneNumber}`;

export const socialLinks = [
  { label: 'WhatsApp', href: whatsappLink, external: true },
  { label: 'Facebook', href: '' },
  { label: 'Instagram', href: '' },
  { label: 'LinkedIn', href: '' },
];
