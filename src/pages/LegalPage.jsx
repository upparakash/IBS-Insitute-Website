import Layout from '../layouts/Layout';
import SEOHead from '../components/SEOHead';
import { SITE } from '../data/siteData';
import { LEGAL_PAGES } from '../data/legalData';
import { FaCalendarAlt } from 'react-icons/fa';

export default function LegalPage({ slug }) {
  const page = LEGAL_PAGES[slug];

  return (
    <Layout>
      <SEOHead
        title={`${page.title} | IBS Bank Career`}
        description={`${page.title} for IBS Institute of Banking Studies — ${page.intro}`}
        canonical={`/${slug}`}
        noindex
      />
      <section className="bg-gradient-to-br from-primary to-accent py-14">
        <div className="container-custom text-center">
          <h1 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-2">{page.title}</h1>
          <p className="flex items-center justify-center gap-2 text-white/70 text-sm">
            <FaCalendarAlt size={12} /> Effective Date: {page.effectiveDate}
          </p>
        </div>
      </section>

      <section className="py-14 bg-gray-50">
        <div className="container-custom max-w-3xl">
          <div className="glass-card p-6 md:p-10">
            <p className="text-gray-600 leading-relaxed mb-8">{page.intro}</p>

            {page.sections.map((s) => (
              <div key={s.heading} className="mb-7 last:mb-0">
                <h2 className="font-heading font-bold text-gray-900 text-lg mb-2">{s.heading}</h2>
                {s.paragraphs?.map((p) => (
                  <p key={p} className="text-gray-600 text-sm leading-relaxed mb-2">{p}</p>
                ))}
                {s.list && (
                  <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm mt-2">
                    {s.list.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {s.contactEmail && (
                  <a href={`mailto:${SITE.email}`} className="text-primary font-semibold text-sm hover:underline">{SITE.email}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
