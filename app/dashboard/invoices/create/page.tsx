import {Form} from '@/app/ui/invoices/create-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById,fetchCustomers } from '@/app/lib/data';
 import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invoices',
};
export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params; 
   const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ])
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Create Invoice',
            href: '/dashboard/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}