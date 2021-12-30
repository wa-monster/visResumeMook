import jsPdf from 'jspdf'
import html2canvas from 'html2canvas'
const A4Width = 592.28;
const A4Height = 841.89;

/**
 * @description 导出PDF文件，暂时支持单页
 * @param {string} resumeName 导出文件名
 */
export function toPrintPdf(resumeName?:string){
  let name = resumeName || '未命名文件';
  const dom:HTMLElement | any = document.querySelector('#visPdf');
  if(dom){
    html2canvas(dom,{
      allowTaint:true,
    }).then((canvas)=>{
      let cWidth = canvas.width;
      let cHeight = canvas.height;
      //一页pdf显示html页面生成的canvas高度，等比缩放
      let pageHeight = (cWidth / A4Width) * A4Height;
      let leftHeight = cHeight;
      //页面偏移
      let position = 0;
      let imgWidth = A4Width;
      let imgHeight = (A4Width / cWidth) * cHeight;
      let pageData = canvas.toDataURL('image/jpeg',1.0);
      let PDF = new jsPdf('portrait','pt','a4');
      
      //如果只有一页，直接添加，如果有多页，需要不停截去对应高度的图片
      if(leftHeight<pageHeight){
        PDF.addImage(pageData,'JPEG',0,0,imgWidth,imgHeight);
      }else{
        while(leftHeight>0){
          PDF.addImage(pageData,'JPEG',0,0,position,imgHeight)
          leftHeight = leftHeight - pageHeight;
          position = position - A4Height;
          if(leftHeight>0){
            PDF.addPage();
          }
        }
      }
      PDF.save(name+'.pdf')
    })
  }
}


