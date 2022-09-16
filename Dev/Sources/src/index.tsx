import React from 'react';
import ReactDOM from 'react-dom/client';
import Consommation from './Consommation';
import './index.css';
import Production from './Production';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <table className='tab'>
			<tr>
				<td className='prod'><Production /></td>
        <td></td>
				<td className='cons'><Consommation /></td>
			</tr>
      </table>
      </React.StrictMode>
);
