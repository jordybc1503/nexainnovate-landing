import { test, expect } from '@playwright/test'

test('login and create quote wizard', async ({ page }) => {
  await page.goto('/login')
  await page.getByPlaceholder('Email').fill('admin@nexa.dev')
  await page.getByPlaceholder('Contraseña').fill('admin123')
  await page.getByRole('button', { name: 'Entrar' }).click()

  await page.goto('/cotizar')
  await page.getByPlaceholder('Nombre').fill('Admin')
  await page.getByPlaceholder('Email').fill('admin@nexa.dev')
  await page.getByPlaceholder('Empresa').fill('Nexa')
  await page.getByRole('button', { name: 'Siguiente' }).click()
  await page.getByPlaceholder('Servicio').fill('Desarrollo')
  await page.getByPlaceholder('Alcance').fill('Landing + Blog')
  await page.getByRole('button', { name: 'Siguiente' }).click()
  await page.getByRole('button', { name: 'Enviar' }).click()
})

