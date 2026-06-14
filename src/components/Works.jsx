import { motion } from "framer-motion";

const highlights = [
  {
    value: "15+",
    label: "PROJECTS SHIPPED",
    desc: "Full Stack, AI and Interactive Web Applications",
  },
  {
    value: "20+",
    label: "TECH STACK",
    desc: "React, Node.js, MongoDB, Three.js and more",
  },
  {
    value: "10+",
    label: "CERTIFICATIONS",
    desc: "Continuous learning and skill development",
  },
  {
    value: "500+",
    label: "COMMITS DELIVERED",
    desc: "Consistent contribution and experimentation",
  },
];

const Achievement = () => {
  return (
    <section className="relative py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#915EFF] uppercase tracking-[0.4em] text-sm">
            Career Highlights
          </p>

          <h2 className="text-white text-5xl md:text-7xl font-black mt-4">
            Journey Snapshot
          </h2>

          <p className="text-secondary mt-5 max-w-2xl mx-auto">
            A quick overview of my growth, achievements and technical journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className="group relative overflow-hidden rounded-3xl"
            >
              {/* Spotlight */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-all duration-500
                  bg-[radial-gradient(circle_at_center,rgba(145,94,255,0.12),transparent_70%)]
                "
              />

              {/* Floating Orb */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-40
                  h-40
                  rounded-full
                  bg-[#915EFF]/20
                  blur-3xl
                "
              />

              {/* Card */}
              <div
                className="
                  relative z-10
                  h-full
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  p-8
                  transition-all duration-500
                  group-hover:border-[#915EFF]/40
                "
              >
                <div className="mb-8">
                  <h3 className="text-[#915EFF] text-6xl font-black">
                    {item.value}
                  </h3>
                </div>

                <h4
                  className="
                    text-white
                    text-sm
                    tracking-[0.2em]
                    uppercase
                    font-semibold
                  "
                >
                  {item.label}
                </h4>

                <p className="text-secondary mt-4 leading-relaxed">
                  {item.desc}
                </p>

                <motion.div
                  className="mt-8 text-[#915EFF]"
                  whileHover={{ x: 5 }}
                >
                  ↗
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
