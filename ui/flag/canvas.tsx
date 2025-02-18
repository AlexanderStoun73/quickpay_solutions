import React, { useRef, useEffect } from 'react'

const AnimatedUSFlag: React.FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null)
	const offscreenCanvas = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return
		const ctx = canvas.getContext('2d')
		if (!ctx) return

		const width = 320
		const height = 170
		const stripeHeight = height / 13
		const blueWidth = width * 0.4
		const blueHeight = stripeHeight * 7

		const wavelength = 20
		const amplitude = 5
		const period = 100
		const shading = 200
		const squeeze = -0.1
		const fps = 30

		// Создаем offscreen canvas
		offscreenCanvas.current = document.createElement('canvas')
		offscreenCanvas.current.width = width
		offscreenCanvas.current.height = height
		const offCtx = offscreenCanvas.current.getContext('2d')
		if (!offCtx) return

		// Функция рисования флага США
		const drawUSFlag = (ctx: CanvasRenderingContext2D) => {
			// Полосы
			for (let i = 0; i < 13; i++) {
				ctx.fillStyle = i % 2 === 0 ? '#B22234' : '#FFFFFF'
				ctx.fillRect(0, i * stripeHeight, width, stripeHeight)
			}

			// Синее поле
			ctx.fillStyle = '#3C3B6E'
			ctx.fillRect(0, 0, blueWidth, blueHeight)

			// Рисуем звезды (5 рядов по 6, 4 ряда по 5)
			const starRadius = 4
			const rows = 9
			const cols = 6
			const xStep = blueWidth / cols
			const yStep = blueHeight / rows

			ctx.fillStyle = '#FFFFFF'
			for (let row = 0; row < rows; row++) {
				for (let col = 0; col < (row % 2 === 0 ? cols : cols - 1); col++) {
					const x = col * xStep + (row % 2 === 0 ? xStep / 2 : xStep)
					const y = row * yStep + yStep / 2
					drawStar(ctx, x, y, starRadius)
				}
			}
		}

		// Функция для рисования звезды
		const drawStar = (
			ctx: CanvasRenderingContext2D,
			x: number,
			y: number,
			r: number
		) => {
			ctx.beginPath()
			for (let i = 0; i < 10; i++) {
				const angle = (Math.PI / 5) * i
				const radius = i % 2 === 0 ? r : r / 2
				const sx = x + Math.cos(angle) * radius
				const sy = y - Math.sin(angle) * radius
				ctx.lineTo(sx, sy)
			}
			ctx.closePath()
			ctx.fill()
		}

		drawUSFlag(offCtx) // Рисуем флаг США на offscreen canvas

		// Анимация волны
		const waveFlag = () => {
			const imageData = offCtx.getImageData(0, 0, width, height)
			const originalData = imageData.data
			const id = ctx.getImageData(0, 0, width, height)
			const data = id.data
			const now = Date.now() / period

			for (let y = 0; y < height; y++) {
				let lastO = 0
				let shade = 0
				const sq = (y - height / 2) * squeeze
				for (let x = 0; x < width; x++) {
					const px = (y * width + x) * 4
					const pct = x / width
					const o = Math.sin(x / wavelength - now) * amplitude * pct
					const y2 = (y + (o + sq * pct)) << 0
					const opx = (y2 * width + x) * 4

					if (opx >= 0 && opx < originalData.length) {
						shade = (o - lastO) * shading
						data[px] = originalData[opx] + shade
						data[px + 1] = originalData[opx + 1] + shade
						data[px + 2] = originalData[opx + 2] + shade
						data[px + 3] = originalData[opx + 3]
						lastO = o
					}
				}
			}
			ctx.putImageData(id, 0, 0)
		}

		const interval = setInterval(waveFlag, 1000 / fps)

		return () => clearInterval(interval)
	}, [])

	return (
		<canvas
			ref={canvasRef}
			style={{ opacity: '0.5', maxWidth: "230px" }}
			width={320}
			height={170}
		/>
	)
}

export default AnimatedUSFlag
