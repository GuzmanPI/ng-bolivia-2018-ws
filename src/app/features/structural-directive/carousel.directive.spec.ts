import { CarouselDirective } from './carousel.directive';

describe('CarouselDirective', () => {
  it('should create an instance', () => {
    const directive = new CarouselDirective(1, 2);
    expect(directive).toBeTruthy();
  });
});
