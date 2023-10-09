import React from 'react';
import moment from 'moment';
import './companyInfo.scss';
import { CompanyTypes } from '@/types/commonTypes';
interface CompanyInfoProps {
  data: CompanyTypes;
}
export const CompanyInfo = ({ data }: CompanyInfoProps) => {
  return (
    <div className={'experience'}>
      {data.companyName || ''}
      {`(${moment(data.startPeriod).format('YYYY.MM')} ~ ${
        data.endPeriod ? moment(data.endPeriod).format('YYYY.MM') : '현재'
      })`}
      {` - ${data.companyIntroduction}`}
    </div>
  );
};
