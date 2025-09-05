import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Link from 'next/link'
import { Code, Smartphone, Globe, Database, Shield, Zap } from 'lucide-react'

export const metadata = {
  title: 'Desarrollo de Software y Aplicaciones - NexaInnovate',
  description: 'Desarrollamos soluciones de software personalizadas, aplicaciones web y móviles que impulsan el crecimiento de tu negocio.'
}

const services = [
  {
    icon: Globe,
    title: 'Aplicaciones Web',
    description: 'Desarrollo de aplicaciones web modernas con React, Next.js y tecnologías de vanguardia.'
  },
  {
    icon: Smartphone,
    title: 'Apps Móviles',
    description: 'Aplicaciones móviles nativas e híbridas para iOS y Android con React Native y Flutter.'
  },
  {
    icon: Database,
    title: 'Sistemas Empresariales',
    description: 'ERPs, CRMs y sistemas de gestión personalizados para optimizar tus procesos.'
  },
  {
    icon: Code,
    title: 'APIs y Microservicios',
    description: 'Arquitecturas escalables con APIs REST, GraphQL y microservicios en la nube.'
  },
  {
    icon: Shield,
    title: 'Seguridad y Testing',
    description: 'Implementación de mejores prácticas de seguridad y testing automatizado.'
  },
  {
    icon: Zap,
    title: 'Optimización',
    description: 'Mejora del rendimiento y escalabilidad de aplicaciones existentes.'
  }
]

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
  'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs'
]

const process = [
  {
    step: '01',
    title: 'Análisis y Planificación',
    description: 'Entendemos tus necesidades y definimos la arquitectura técnica óptima.'
  },
  {
    step: '02',
    title: 'Diseño y Prototipado',
    description: 'Creamos wireframes y prototipos para validar la experiencia de usuario.'
  },
  {
    step: '03',
    title: 'Desarrollo Ágil',
    description: 'Implementamos la solución usando metodologías ágiles con entregas incrementales.'
  },
  {
    step: '04',
    title: 'Testing y QA',
    description: 'Realizamos pruebas exhaustivas para garantizar calidad y rendimiento.'
  },
  {
    step: '05',
    title: 'Despliegue y Soporte',
    description: 'Lanzamos tu aplicación y brindamos soporte continuo y mantenimiento.'
  }
]

export default function DesarrolloPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="text-center">
        <h1 className="mb-6 font-display text-4xl md:text-5xl">
          Desarrollo de{' '}
          <span className="text-brand-500">Software y Aplicaciones</span>
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-xl text-textMuted">
          Transformamos tus ideas en soluciones tecnológicas robustas y escalables. 
          Desarrollamos software personalizado que impulsa el crecimiento de tu negocio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/cotizar">
            <Button className="bg-brand-600 hover:bg-brand-700">
              Solicitar Cotización
            </Button>
          </Link>
          <Link href="/contacto">
            <Button className="bg-transparent border border-brand-500 text-brand-500 hover:bg-brand-500 hover:text-white">
              Consulta Gratuita
            </Button>
          </Link>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <h2 className="mb-12 text-center font-display text-3xl">
          Nuestros Servicios de Desarrollo
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="mb-4 flex justify-center">
                <service.icon className="h-12 w-12 text-brand-500" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
              <p className="text-textMuted">{service.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-bgSoft">
        <h2 className="mb-12 text-center font-display text-3xl">
          Tecnologías que Dominamos
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="rounded-full bg-brand-500/10 px-4 py-2 text-sm font-medium text-brand-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section>
        <h2 className="mb-12 text-center font-display text-3xl">
          Nuestro Proceso de Desarrollo
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {process.map((item, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 text-3xl font-bold text-brand-500">
                {item.step}
              </div>
              <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
              <p className="text-textMuted">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-bgSoft">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-3xl">
              ¿Por Qué Elegir Nuestro Desarrollo?
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <div>
                  <h3 className="font-semibold">Código Limpio y Mantenible</h3>
                  <p className="text-sm text-textMuted">
                    Seguimos las mejores prácticas de desarrollo para garantizar código escalable.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <div>
                  <h3 className="font-semibold">Metodologías Ágiles</h3>
                  <p className="text-sm text-textMuted">
                    Entregas frecuentes y comunicación constante durante todo el proyecto.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <div>
                  <h3 className="font-semibold">Seguridad y Performance</h3>
                  <p className="text-sm text-textMuted">
                    Implementamos las mejores prácticas de seguridad y optimización.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                <div>
                  <h3 className="font-semibold">Soporte Post-Lanzamiento</h3>
                  <p className="text-sm text-textMuted">
                    Brindamos soporte continuo y actualizaciones después del lanzamiento.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-2xl bg-gradient-to-br from-brand-500/20 to-brand-600/20 p-8 text-center">
              <Code className="mx-auto mb-4 h-16 w-16 text-brand-500" />
              <h3 className="mb-2 text-xl font-semibold">Desarrollo a Medida</h3>
              <p className="text-textMuted">
                Cada proyecto es único y merece una solución personalizada.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="text-center">
        <h2 className="mb-6 font-display text-3xl">
          ¿Listo para Desarrollar tu Proyecto?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-textMuted">
          Contáctanos para una consulta gratuita y descubre cómo podemos 
          transformar tu idea en una solución tecnológica exitosa.
        </p>
        <Link href="/cotizar">
          <Button className="bg-brand-600 hover:bg-brand-700 px-8 py-3 text-lg">
            Comenzar mi Proyecto
          </Button>
        </Link>
      </Section>
    </>
  )
}
