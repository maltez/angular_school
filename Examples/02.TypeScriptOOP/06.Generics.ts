type valueOfGenericType = boolean |  number | string; 
function valueOf<T extends valueOfGenericType>(val:T): boolean {
    if(typeof val === 'string') {
        return val.length > 0;
    } else if( typeof val === 'number' )  {
        return val !== 0 && !Number.isNaN(val);
    } else if(typeof val === 'boolean') {
        return val;
    }

    return true;
}

valueOf<string>('str');
valueOf<boolean>(true);