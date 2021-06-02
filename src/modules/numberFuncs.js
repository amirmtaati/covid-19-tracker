import numeral from 'numeral'

export const sortData = data => {
    return data.sort((a, b) => b.cases - a.cases)
}

export const prettyNumber = (num,format) => {
    return num ? `${numeral(num).format(format)}` : "+0"
}
