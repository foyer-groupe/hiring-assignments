/* Dummy pagination widget, relying on two inputs:
* activePageNumber given by its parent
* numberOfPages that the component will fetch by himself during the initialisation phase */
import {Component, ChangeDetectionStrategy, Input, OnInit, OnDestroy} from '@angular/core';
import {ItemsService} from "../service/items.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-pagination-widget',
  templateUrl: './pagination-widget.component.html',
  styleUrls: ['./pagination-widget.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginationWidgetComponent implements OnInit, OnDestroy {
  private readonly _ngUnsubscribe: Subject<void> = new Subject<void>();

  /* Represents the active page in our pagination widget, default value is 1 */
  private _activePageNumber: number = DEFAULT_ACTIVE_PAGE_NUMBER;

  /* Assign active to _activePageNumber
  *  If numberOfPages IS NOT undefined:
  *     check that active is <= to numberOfPages and if it is not, assign it to DEFAULT_ACTIVE_PAGE_NUMBER
  *  It should always be >= 1 set it to DEFAULT_ACTIVE_PAGE_NUMBER otherwise
  *  If numberOfPages is undefined, only check that it is >= 1
  */
  @Input()
  set activePageNumber(active: number) {
    // Code missing
    this._activePageNumber = active;
  }

  private _numberOfPages!: number;

  constructor(private readonly _itemsService: ItemsService) {}

  ngOnInit() {
    this._itemsService.getItems()
      .pipe(
        takeUntil(this._ngUnsubscribe)
      ).subscribe(items => {
        /* Assign the items length to _numberOfPages and check if the activePageNumber is <= numberOfPages, otherwise set if back to DEFAULT_ACTIVE_PAGE_NUMBER */
        // Code missing
    });
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  /*
  * Returns an array representing the range of a pagination. It uses the Digg-style algorithm with a delta set to 2 between the active page
  * It uses two internal fields, the numberOfPages and the activePageNumber
  * Examples:
  * 1 ... [active - 2] [active - 1] [active] [active + 1] [active + 2] ... numberOfPages
  * '...' is used when there is a gap of at least 1 element between the first and [active - 2] or [active + 2] and the last one (i.e numberOfPages)
  * If activePageNumber = 3 and numberOfPages = 100:
  * 1 2 3 4 5 ... 100
  * If activePageNumber = 5 and numberOfPages = 100:
  * 1 ... 3 4 5 6 7 ... 100 // here 2 isn't displayed, we have ... as there is a gap of 1 between [active - 2] and 1
  * If activePageNumber = 6 and numberOfPages = 100:
  * 1 ... 4 5 6 7 8 ... 100
  * The pages are numbers while the ... are strings.
  */
  getPageRange(): Array<string | number> {
    // Code missing
    return [];
  }

  /* Decrease the activePageNumber by 1 cannot go below 1 */
  previous(): void {
    // Code missing
  }

  /* Increase the activePageNumber by 1 cannot go above numberOfPages */
  next(): void {
    // Code missing
  }
}

export const DEFAULT_ACTIVE_PAGE_NUMBER = 1;
