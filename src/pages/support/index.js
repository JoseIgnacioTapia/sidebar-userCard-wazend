import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { 
    CalendarIcon, 
    CommandLineIcon, 
    MegaphoneIcon, 
    Bars4Icon,
    PhotoIcon,
    ChatBubbleLeftRightIcon,
    BookOpenIcon,
    UsersIcon
} from '@heroicons/react/24/outline'

import Layout from '../../layout/dashboard';

const items = [
    {
        name: 'WhatsApp',
        description: 'Obtén ayuda y asistencia personalizada.',
        icon: ChatBubbleLeftRightIcon, // Icono representativo de un chat para WhatsApp
        href: 'https://api.whatsapp.com/send?phone=51924079147',
        iconColor: 'bg-emerald-500',
    },
    {
        name: 'Documentación',
        description: 'Mira tutoriales sobre nuestra plataforma.',
        icon: BookOpenIcon, // Icono de un libro abierto para documentación
        href: 'https://docs.wazend.net/',
        iconColor: 'bg-purple-500',
    },
    {
        name: 'Grupo de WhatsApp',
        description: 'Únete a nuestra comunidad de WhatsApp.',
        icon: UsersIcon, // Icono de grupo de personas para representar una comunidad
        href: 'https://chat.whatsapp.com/EwHDcL2PbJIG9wP9HZoFlL',
        iconColor: 'bg-blue-500',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Index() {
    return (
        <Layout title="Soporte">
            <div className="mx-auto max-w-lg">
                <h2 className="text-base font-semibold leading-6 text-gray-900">¿Necesitas ayuda?</h2>
                <p className="mt-1 text-sm text-gray-500">Encuéntralas en nuestros diferentes canales</p>
                <ul role="list" className="mt-6 divide-y divide-gray-200 border-b border-t border-gray-200">
                    {items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                            <div className="group relative flex items-start space-x-3 py-4">
                                <div className="flex-shrink-0">
                                    <span
                                        className={classNames(item.iconColor, 'inline-flex h-10 w-10 items-center justify-center rounded-lg')}
                                    >
                                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-sm font-medium text-gray-900">
                                        <a href={item.href}>
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {item.name}
                                        </a>
                                    </div>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                                <div className="flex-shrink-0 self-center">
                                    <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                {/* <div className="mt-6 flex">
                    <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Or start from an empty project
                        <span aria-hidden="true"> &rarr;</span>
                    </a>
                </div> */}
            </div>
        </Layout>
    )
}
