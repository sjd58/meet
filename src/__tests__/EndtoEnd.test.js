import puppeteer from 'puppeteer';
describe('show/hide an event details', () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = puppeteer.launch();
    page = await browser.newPage(); //add code here so that it displays the EndtoEnd testing
    await page.goto('http://localhost:3000/')
    await page.waitForSelector('.event');
  });

  afterAll(() => {
    browser.close();
  })

  test('An event element is collapsed by default', async () => {
    const eventDetails = await page.$('.event .extra-details');
    expect(eventDetails).toBeNull();
  }); //run this test to see if it works. 

  test('User can expand an event to see its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .extra-details');
    expect(eventDetails).toBeDefined();
  });

  test('User can collapse an event to hide its details', async () => {
    await page.click('.event .details-btn');
    const eventDetails = await page.$('.event .extra-details');
    expect(eventDetails).toBeNull();
  });
});