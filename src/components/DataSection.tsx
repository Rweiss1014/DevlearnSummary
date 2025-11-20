import { motion } from 'motion/react';
import { Database, TrendingUp, Users, BarChart3 } from 'lucide-react';

const metrics = [
  {
    icon: TrendingUp,
    title: 'Pre/post quiz improvement',
    description: 'Measure knowledge gain',
  },
  {
    icon: Users,
    title: 'Behavior application',
    description: 'Via survey or manager input',
  },
  {
    icon: BarChart3,
    title: 'Drop-off points',
    description: 'Where people stop engaging',
  },
];

export function DataSection() {
  return (
    <section id="data" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-slate-900 mb-4">Let's Get Real About Data</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Moving from completion metrics to meaningful behavioral insights
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 bg-[#ade2e3] rounded-lg flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-[#007178]" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-2">How to do it:</h3>
              <p className="text-slate-600">
                Export LMS data weekly (from Absorb): who completed, how fast, score
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-6 mb-6">
            <h4 className="text-slate-900 mb-4">Create 3 key metrics:</h4>
            <div className="grid md:grid-cols-3 gap-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-lg p-4 border border-slate-200"
                  >
                    <Icon className="w-5 h-5 text-[#007178] mb-2" />
                    <h4 className="text-slate-900 text-sm mb-1">{metric.title}</h4>
                    <p className="text-slate-600 text-xs">{metric.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#ade2e3]/20 rounded-lg p-6 border border-[#007178]/30">
            <h4 className="text-slate-900 mb-2">Visualization:</h4>
            <p className="text-slate-700">
              Use <span className="font-medium">Google Looker Studio</span> (free, link to Sheets) to create dashboards that make the data actionable
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}