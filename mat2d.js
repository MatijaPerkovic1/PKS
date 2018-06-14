class MAT2D {

	napraviMatricuTocke(x, y){

		var matrica = [x, y , 1];
		return matrica;
	}

	rotiraj(matr, fi){

		var matricaRotacije = 
		[
		[Math.cos(fi), Math.sin(fi), 0],
		[-Math.sin(fi), Math.cos(fi), 0],
		[0, 0, 1]
		];

		var rezultatRotacije = 
		[
		matr[0] * matricaRotacije[0][0] + matr[1] * matricaRotacije[1][0] + matr[2] * matricaRotacije[2][0],
		matr[0] * matricaRotacije[0][1] + matr[1] * matricaRotacije[1][1] + matr[2] * matricaRotacije[2][1],
		matr[0] * matricaRotacije[0][2] + matr[1] * matricaRotacije[1][2] + matr[2] * matricaRotacije[2][2]
		];

		return rezultatRotacije;
	}

	translacija(matr, x1, y1){

		var matricaTranslacije =
		[
		[1, 0, 0],
		[0, 1, 0],
		[-x1, -y1, 1]
		];

		var rezultatTranslacije = 
		[
		matr[0] * matricaTranslacije[0][0] + matr[1] * matricaTranslacije[1][0] + matr[2] * matricaTranslacije[2][0],
		matr[0] * matricaTranslacije[0][1] + matr[1] * matricaTranslacije[1][1] + matr[2] * matricaTranslacije[2][1],
		matr[0] * matricaTranslacije[0][2] + matr[1] * matricaTranslacije[1][2] + matr[2] * matricaTranslacije[2][2]
		];

		return rezultatTranslacije;
	}

	skaliranje(matr, sx, sy){
		var matricaSkaliranja = 
		[
		[sx, 0, 0],
		[0, sy, 0],
		[0, 0, 1]
		];

		var rezultatSkaliranja =
		[
		matr[0] * matricaSkaliranja[0][0] + matr[1] * matricaSkaliranja[1][0] + matr[2] * matricaSkaliranja[2][0],
		matr[0] * matricaSkaliranja[0][1] + matr[1] * matricaSkaliranja[1][1] + matr[2] * matricaSkaliranja[2][1],
		matr[0] * matricaSkaliranja[0][2] + matr[1] * matricaSkaliranja[1][2] + matr[2] * matricaSkaliranja[2][2]
		];

		return rezultatSkaliranja;
	}

}