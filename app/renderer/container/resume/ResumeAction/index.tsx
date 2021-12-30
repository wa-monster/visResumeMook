import React from 'react';
import './index.less';
import {useHistory} from 'react-router'
import MyButton from '@common/components/MyButton'
import ROUTER from '@src/common/constants/router'
import {useSelector} from 'react-redux'
import { toPrintPdf } from '@common/utils/htmlToPdf';
function ResumeAction() {
  const history = useHistory();
  const onBack = ()=>history.push(ROUTER.root);
  const base:TSResume.Base = useSelector((state:any)=>state.resumeModel.base)
  const work:TSResume.Work = useSelector((state:any)=>state.resumeModel.work)
  const onExport = ()=>{
    toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
  };

  return (
    <div styleName='actions'>
      <div styleName='back' onClick={onBack}>返回</div>
      <MyButton size="middle" className="export-btn" onClick={onExport}>导出PDF</MyButton>
    </div>
  );
}
export default ResumeAction;