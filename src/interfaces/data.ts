export interface IResponse {
	docs: ICard[]
	total: number
	limit: number
	page: number
	pages: number
}

export interface ICard {
	id: number | null
	externalId: IExternalId
	name: string | null
	alternativeName: string | null
	enName: string | null
	names: any
	type: string | null
	typeNumber: number | null

	year: number | true
	description: string | null
	shortDescription: string | null
	slogan: string | null
	status: string | null
	facts: any
	rating: IRating
	votes: any
	movieLength: number | true
	ratingMpaa: string | true
	ageRating: number | null
	logo: any
	poster?: IPoster

	backdrop: any
	videos: any
	genres: any
	countries: any
	persons: any
	reviewInfo: any
	seasonsInfo: any
	budget: any
	fees: any
	premiere: any
	similarMovies: any
	sequelsAndPrequels: any
	watchability: any
	releaseYears: any
	top10: number | null
	top250: number | null
	ticketsOnSale: boolean | null
	totalSeriesLength: number | null
	seriesLength: number | null
	isSeries: boolean | null
	audience: any
	lists: any
	networks: any
	updatedAt: string | null
	createdAt: string | null
}

interface IExternalId {}

interface IRating {
	kp: number | null
	imdb: number | null
	filmCritics: number | null
	russianFilmCritics: number | null
	await: number | null
}

interface IPoster {
	url: string | null
	previewUrl: string | null
}

export interface IResponseGenre {
	name: string
	slug: string
}

export interface IFilterSlice {
	year: {
		from: number
		to: number
	}
	rating: {
		from: number
		to: number
	}
	genres: {
		stackGenres: IResponseGenre[] | null
		selectedGenres: string[] | string
	}

	pages: {
		pagesQty: number
		page: number
	}
}

export interface IResponseGenre {
	name: string
	slug: string
}
