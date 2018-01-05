import {TestBed, inject, ComponentFixture} from '@angular/core/testing';
import {EntryService} from './entry.service';
import {HttpClientModule} from '@angular/common/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {EntryComponent} from '../entry/entry.component';


let comp: EntryComponent;
let fixture: ComponentFixture<EntryComponent>;
let service: EntryService;


describe('EntryService', () => {


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EntryService],
      imports: [HttpClientModule],
    });
  });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(EntryComponent);
  //   comp = fixture.componentInstance;
  //   // service = fixture.debugElement.injector.get(EntryService);
  // });

  it('should be created', inject([EntryService], (service: EntryService) => {
    expect(service).toBeTruthy();
  }));

  // it('should return a promise of EntryItem data',
  //   inject([EntryService], (myservice: EntryService) => {
  //
  //     myservice.addNewEntry(new EntryItem(, '', '', '', '',
  //       '', '', '', ''));
  //   }));
});


// describe('OnInit', () => {
//   // it('Should call load all on init', () => {
//   //   // GIVEN
//   //
//   //   spyOn(service, 'addNewEntry').and.returnValue(Observable.of(new EntryItem(, '', '', '', '',
//   //     '', '', '', '')));
//   //
//   //   // WHEN
//   //   comp.ngOnInit();
//   //
//   //   // THEN
//   //   expect(service.addNewEntry).toHaveBeenCalledWith(123);
//   //   expect(comp.testvar).toEqual(jasmine.objectContaining('w'));
//   // });
// });
