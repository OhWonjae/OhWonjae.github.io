import React from 'react';
import moment from 'moment';
import './projectInfo.scss';
import { projectTypes } from '@/types/commonTypes';
interface ProjectInfoProps {
  data: projectTypes;
}
export const ProjectInfo = ({ data }: ProjectInfoProps) => {
  return (
    <>
      <div className={'project'}>
        <div className={'project-title'}>
          {data.title || ''}
          {`(${
            data.startPeriod ? moment(data.startPeriod).format('YYYY.MM') : ''
          } ~ ${
            data.endPeriod ? moment(data.endPeriod).format('YYYY.MM') : '현재'
          })`}
          {data.url && (
            <div className={'project-url'}>
              <a href={data.url || ''} target="_blank" rel="noreferrer">{`${
                data.url || ''
              }`}</a>
            </div>
          )}
        </div>

        <ul className={'project-detail'}>
          {data.details?.map((d, idx) => (
            <li className={'project-detail-item'} key={idx}>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
