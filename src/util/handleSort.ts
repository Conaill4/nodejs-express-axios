export interface SortState {
    [key: string]: string | null;
  }
  
  let currentSortState: SortState = {};
  
  export function updateSorting(fieldName: string): void {
    const currentUrlParams = new URLSearchParams(window.location.search);
    
    let orderBy: string | null = currentSortState[fieldName] || 'ASC';
    
    if (orderBy === 'ASC') {
      orderBy = 'DESC';
    } else if (orderBy === 'DESC') {
      orderBy = null;
    } else {
      orderBy = 'ASC';
    }
  

    currentSortState[fieldName] = orderBy;
  
    if (orderBy) {
      currentUrlParams.set('fieldName', fieldName);
      currentUrlParams.set('orderBy', orderBy);
    } else {
      currentUrlParams.delete('fieldName');
      currentUrlParams.delete('orderBy');
    }
  
    currentUrlParams.set('page', '1');
  
    const newUrl = `${window.location.pathname}?${currentUrlParams.toString()}`;
  
    window.location.href = newUrl;
  }
  