// Service worker mínimo — só existe para o navegador permitir "instalar como app".
// Não faz cache: o sistema sempre busca os dados mais recentes do Supabase.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // passa direto, sem interceptar nada
