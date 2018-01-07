import {DependentService, FancyService} from './service';


export class FakeFancyService extends FancyService {
  value = 'faked value';
}



describe('DependentService without the TestBed', () => {
  let service: DependentService;

  it('#getValue should return real value by way of the real FancyService', () => {
    service = new DependentService(new FancyService());
    expect(service.getValue()).toBe('real value');
  });

  it('#getValue should return faked value by way of a fakeService', () => {
    service = new DependentService(new FakeFancyService());
    expect(service.getValue()).toBe('faked value');
  });

  it('#getValue should return faked value from a fake object', () => {
    const fake =  { getValue: () => 'fake value' };
    service = new DependentService(fake as FancyService);
    expect(service.getValue()).toBe('fake value');
  });

  it('#getValue should return stubbed value from a FancyService spy', () => {
    const fancy = new FancyService();
    const stubValue = 'stub value';
    const spy = spyOn(fancy, 'getValue').and.returnValue(stubValue);
    service = new DependentService(fancy);

    expect(service.getValue()).toBe(stubValue, 'service returned stub value');
    expect(spy.calls.count()).toBe(1, 'stubbed method was called once');
    expect(spy.calls.mostRecent().returnValue).toBe(stubValue);
  });
});
