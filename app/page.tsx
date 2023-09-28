'use client';

import Banner from '@/components/banner/banner';
import DomainTable from '@/components/domain-table/doman-table';
import Filters from '@/components/filters/filters';
import Navbar from '@/components/navbar/navbar';
import Sidebar from '@/components/sidebar/sidebar';
import SubNav from '@/components/subnav/subnav';


export default function Home() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <SubNav />
      <main>
        <Banner />
        <div className="pt-2 grid-container">
          <div className="grid-left g-4">
            <p className="text-dark-gray market">
              დომენები მარკეტზე:{' '}
              <span className="text-dark font-bold">703</span>
            </p>
            <div className="list">
              <Filters />
            </div>
          </div>
          <DomainTable/>
        </div>
      </main>
    </>
  );
}
