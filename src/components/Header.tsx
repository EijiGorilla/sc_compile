import { useEffect, useState } from 'react';
import { dateUpdate } from '../Query';
import ContractPackageDisplay from './ContractPackageContext';

function Header() {
  const [asOfDate, setAsOfDate] = useState<undefined | any | unknown>(null);

  useEffect(() => {
    dateUpdate().then((response: any) => {
      setAsOfDate(response);
    });
  }, []);

  return (
    <>
      <header
        slot="header"
        id="headerDiv"
        style={{ display: 'flex', width: '100%', height: '55px', padding: '0.4rem' }}
      >
        <img
          src="https://EijiGorilla.github.io/Symbols/Projec_Logo/DOTr_Logo_v2.png"
          alt="DOTr Logo"
          height={'55px'}
          width={'55px'}
          style={{ marginBottom: 'auto', marginTop: 'auto' }}
        />
        <b className="headerTitle" style={{ width: '30%' }}>
          SC OVERALL PROGRESS
        </b>
        <div className="date">{!asOfDate ? '' : 'As of ' + asOfDate}</div>

        {/* Contract Package Segmented List */}
        <ContractPackageDisplay />

        <img
          src="https://EijiGorilla.github.io/Symbols/Projec_Logo/GCR LOGO.png"
          alt="GCR Logo"
          height={'50px'}
          width={'75px'}
          style={{
            marginBottom: 'auto',
            marginTop: 'auto',
            marginLeft: '0.5rem',
            marginRight: '2rem',
          }}
        />
      </header>
    </>
  );
}

export default Header;
