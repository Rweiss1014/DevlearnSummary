import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const vendors = [
  {
    name: 'ELB Training Arcade',
    offer: 'Gamified games tied to training',
    build: 'Build our own HTML5 games (quiz, match, scenario) with exportable results',
  },
  {
    name: 'Cognota',
    offer: 'Workflow for managing L&D projects',
    build: 'Use Airtable (a mix of spreadsheet + database) to create an intake form, project tracker, SME assignment board',
  },
  {
    name: 'Centrical',
    offer: 'Gamified performance feedback',
    build: 'Export LMS quiz results to Google Sheets, rank learner performance weekly, post leaderboards via email or Slack',
  },
  {
    name: 'Pictory',
    offer: 'AI video generator from scripts or PPTs',
    build: 'Convert our internal decks into narrated recap videos for microlearning reuse',
  },
];

export function VendorComparison() {
  return (
    <section id="vendors" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-slate-900 mb-4">Vendors to Learn From — and Mimic Internally</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Instead of buying expensive solutions, we can build our own versions
          </p>
        </motion.div>

        <div className="space-y-6">
          {vendors.map((vendor, index) => (
            <motion.div
              key={vendor.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                <div className="p-6 bg-slate-50">
                  <h3 className="text-slate-900 mb-3">{vendor.name}</h3>
                  <p className="text-slate-600 text-sm mb-2">What they offer:</p>
                  <p className="text-slate-700">{vendor.offer}</p>
                </div>
                <div className="p-6 relative">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 -translate-x-12 w-8 h-8 bg-blue-100 rounded-full hidden md:flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-blue-600" />
                  </div>
                  <p className="text-slate-600 text-sm mb-2">What we can build:</p>
                  <p className="text-slate-700">{vendor.build}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
