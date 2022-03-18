import { MegaMenu } from 'primereact/megamenu';

const Footer = () => {
  const items = [
    {
      label: 'ARI', icon: 'pi pi-fw pi-android',
      url: 'http://ari.telecom.com/'
    },
    {
      label: 'Mesa de ayuda: 011-4968-1234',
      icon: 'pi pi-fw pi-phone',
      url: '11-333-4444'
    }
  ]

  return (
    <div className='card'>
      <MegaMenu className='absolute bottom-0 w-screen' model={items} orientation="horizontal" />
    </div>
  )
}

export default Footer