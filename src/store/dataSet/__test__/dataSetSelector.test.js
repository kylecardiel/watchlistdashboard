import * as selectors from 'store/dataSet/dataSetSelector';
import { initialState } from 'store/initialState';

describe('Dataset Selector', () => {
 
    describe('selector: getDataset', () => {
        it('should get dataset object', () => {
            const actual = selectors.getDataSet(initialState);
            const expected = {
                displayedData: [],
            };
            expect(expected).toEqual(actual);
        });
    });

    describe('selector: getDisplayedData', () => {
        it('should get display data', () => {
            const displayedData = [{ symbol: 'name1' }, { symbol: 'name2' }];
            initialState.dataSet.displayedData = displayedData;
            const actual = selectors.getDisplayedData(initialState);
            expect(actual).toBe(displayedData);
        });
    });




});