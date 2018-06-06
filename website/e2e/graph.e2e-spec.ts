import { browser, by, element } from 'protractor';
import { AppGraph } from './graph.po';

describe('website graph', function () {
    let page: AppGraph;

    beforeEach(() => {
        page = new AppGraph();
    });

    it('should filter results', function () {
        page.navigateTo();
        // Find the element with id="food" and type "cheese" into it
        element(by.id('food')).sendKeys('cheese');

        // Find the first (and only) button on the page and click it
        element(by.css(':button')).click();

        // Verify that now there is only one item
        expect(element.all(by.className('chartjs-render-monitor')).count()).toEqual(1);
    });
});