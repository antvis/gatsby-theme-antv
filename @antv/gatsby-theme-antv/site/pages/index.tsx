import React from 'react';
import RedirectIndex from '../components/RedirectIndex';

const Page: React.FC & { noLayout: boolean } = () => <RedirectIndex />;

Page.noLayout = true;

export default Page;
