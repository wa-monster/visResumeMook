/**
 *
 *
 * @export
 * @param {string} url
 * @return {*}  {boolean}
 */
export function isHttpOrHttpsUrl(url:string):boolean{
  let regRule = /(http|https):\/\/([\w.]+\/?)\S*/
  return regRule.test(url.toLowerCase())
} 