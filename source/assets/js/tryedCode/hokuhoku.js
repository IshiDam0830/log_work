console.log(Array(4).fill().reduce(([s, a], _, i) => [s, [...a, ...(i === 2 ? [...a, 'の'] : []), s.splice(Math.floor(Math.random() * s.length), 1)[0]]], [
	[...'ホクイモ'],
	[]
])[1].join(''))