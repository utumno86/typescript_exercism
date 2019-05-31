interface DnaToRna {
    [nucleotide: string]: string
}

const dnaToRna: DnaToRna = {
    G : 'C',
    C : 'G',
    T : 'A',
    A : 'U'
}

class Transcriptor {
    toRna(input: string ) {
        const nucleotides: string[] = input.split('')
        return nucleotides.map((nucleotide) => {
            if (dnaToRna[nucleotide]) {
                return dnaToRna[nucleotide]
            } else {
                throw new Error('Invalid input DNA.')
            }
        }).join('')
    }
}

export default Transcriptor