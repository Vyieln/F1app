
    const puppeteer = require('puppeteer');
    async function scrapeProduct(url) {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);
      
      const [el] = await page.$x('//*[@id="mw-content-text"]/div[1]/table[1]/tbody/tr[1]/td/a/img');
      const src = await el.getProperty('src');
      const srcTxt = src.jsonValue();
  
      console.log(srcTxt);

      browser.close();
  
    }
    scrapeProduct('https://en.wikipedia.org/wiki/Fernando_Alonso')

