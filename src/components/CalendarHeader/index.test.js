import renderer from 'react-test-renderer';
import Header from './index';
import add from 'date-fns/add';
import { getAllDatesBetween } from '../utils';

it('renders all dates', () => {
    const dayFrom = new Date();
    const to = add( dayFrom, {
        weeks: 1
    });

    const dates = getAllDatesBetween(dayFrom, new Date(to));
    const component = renderer.create(
        <Header dates={dates} />,
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});