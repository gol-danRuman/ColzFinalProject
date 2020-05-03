// import { shallow } from 'enzyme';
import {shallow} from 'enzyme';
import * as React from 'react';
import Loading from './';

describe('<Loading />', () => {
  it('simulates loading', () => {
    const pastDelay = true;
    const wrapper = shallow(
      <Loading pastDelay={pastDelay}/>);

    const textLoading = wrapper.find('.text-loading');
    expect(textLoading.length).toEqual(1);
  });
  it('simulates loading error', () => {
    const error = true;
    const wrapper = shallow(
      <Loading error={error}/>
    );
    expect(
      wrapper.contains(<h3>Please make sure you are connected to the internet!</h3>)
    ).toEqual(true);
  });
  it('Render empty div on no prop passed', () => {
    const wrapper = shallow(
      <Loading />
    );
    expect(wrapper.find('div').length).toEqual(1);
  });
});
