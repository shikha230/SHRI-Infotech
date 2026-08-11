import React from 'react';
import {
  Code,
  Globe,
  Database,
  Smartphone,
  Cpu,
  Layers,
  Layout,
  Terminal,
  Zap,
  Server,
  Cloud,
  FileCode,
  Shield,
  Palette
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiFirebase,
  SiGraphql,
  SiSqlite,
  SiRedux,
  SiExpo,
  SiWordpress,
  SiPhp,
  SiMysql,
  SiWoocommerce,
  SiElementor,
  SiShopify,
  SiJavascript,
  SiStripe,
  SiGoogleanalytics,
  SiMeta,
  SiPython,
  SiR,
  SiFigma,
  SiFramer,
  SiHotjar,
  SiMiro
} from 'react-icons/si';

// Guaranteed brand icon map
export const techIconMap = {
  'React': { icon: SiReact, color: '#61DAFB' },
  'React Native': { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#000000' },
  'Vue.js': { icon: SiVuedotjs, color: '#4FC08D' },
  'Angular': { icon: SiAngular, color: '#DD0031' },
  'Node.js': { icon: SiNodedotjs, color: '#339933' },
  'TypeScript': { icon: SiTypescript, color: '#3178C6' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4' },
  'MongoDB': { icon: SiMongodb, color: '#47A248' },
  'PostgreSQL': { icon: SiPostgresql, color: '#4169E1' },
  'AWS': { icon: Cloud, color: '#FF9900' },

  'Flutter': { icon: SiFlutter, color: '#02569B' },
  'Swift': { icon: SiSwift, color: '#F05138' },
  'Kotlin': { icon: SiKotlin, color: '#7F52FF' },
  'Firebase': { icon: SiFirebase, color: '#FFCA28' },
  'GraphQL': { icon: SiGraphql, color: '#E10098' },
  'REST APIs': { icon: Server, color: '#008080' },
  'SQLite': { icon: SiSqlite, color: '#003B57' },
  'Redux': { icon: SiRedux, color: '#764ABC' },
  'Expo': { icon: SiExpo, color: '#000000' },

  'WordPress': { icon: SiWordpress, color: '#21759B' },
  'PHP': { icon: SiPhp, color: '#777BB4' },
  'MySQL': { icon: SiMysql, color: '#4479A1' },
  'WooCommerce': { icon: SiWoocommerce, color: '#96588A' },
  'Elementor': { icon: SiElementor, color: '#92003B' },
  'ACF Pro': { icon: SiWordpress, color: '#21759B' },
  'REST API': { icon: Server, color: '#008080' },
  'Gutenberg': { icon: SiWordpress, color: '#21759B' },
  'WPML': { icon: Globe, color: '#21759B' },
  'Yoast SEO': { icon: Zap, color: '#A4286A' },

  'Shopify': { icon: SiShopify, color: '#7AB55C' },
  'Liquid': { icon: SiShopify, color: '#7AB55C' },
  'Shopify Plus': { icon: SiShopify, color: '#7AB55C' },
  'JavaScript': { icon: SiJavascript, color: '#F7DF1E' },
  'Shopify APIs': { icon: SiShopify, color: '#7AB55C' },
  'Razorpay': { icon: SiStripe, color: '#0C2340' },
  'Stripe': { icon: SiStripe, color: '#008CDD' },
  'Klaviyo': { icon: SiShopify, color: '#151515' },
  'Google Analytics': { icon: SiGoogleanalytics, color: '#E37400' },
  'Meta Pixel': { icon: SiMeta, color: '#0467DF' },

  'Power BI': { icon: Layout, color: '#F2C811' },
  'DAX': { icon: Code, color: '#0078D4' },
  'Power Query': { icon: Database, color: '#0078D4' },
  'SQL Server': { icon: Database, color: '#CC292B' },
  'Azure': { icon: Cloud, color: '#0089D6' },
  'Python': { icon: SiPython, color: '#3776AB' },
  'R': { icon: SiR, color: '#276DC3' },
  'Excel': { icon: FileCode, color: '#217346' },
  'SharePoint': { icon: Globe, color: '#0078D4' },
  'Dataverse': { icon: Database, color: '#0078D4' },

  'Figma': { icon: SiFigma, color: '#F24E1E' },
  'Adobe XD': { icon: Palette, color: '#FF61F6' },
  'Sketch': { icon: Layout, color: '#F7B500' },
  'InVision': { icon: Layers, color: '#FF3366' },
  'Principle': { icon: SiFramer, color: '#0055FF' },
  'After Effects': { icon: SiFramer, color: '#9999FF' },
  'Lottie': { icon: SiFramer, color: '#00DDB3' },
  'Maze': { icon: SiFigma, color: '#F24E1E' },
  'Hotjar': { icon: SiHotjar, color: '#FD3A5C' },
  'Miro': { icon: SiMiro, color: '#050038' }
};

export function getTechLogoNode(techName) {
  const item = techIconMap[techName];
  if (!item || !item.icon) {
    return (
      <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-200 bg-white/95 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
        <span className="text-base">⚡</span>
        <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{techName}</span>
      </div>
    );
  }

  const IconComp = item.icon;
  return (
    <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-200 bg-white/95 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer">
      <IconComp style={{ color: item.color, width: '22px', height: '22px' }} className="shrink-0 transition-transform duration-300 group-hover:scale-125" />
      <span className="text-sm font-semibold text-gray-800 whitespace-nowrap">{techName}</span>
    </div>
  );
}
