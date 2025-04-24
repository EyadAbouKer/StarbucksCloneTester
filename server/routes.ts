import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.get('/api/gift-cards', (req, res) => {
    res.json({
      message: 'Success',
      data: {
        categories: [
          'featured',
          'adminAppreciation',
          'birthday',
          'thankYou',
          'celebration',
          'appreciation',
          'spring',
          'mothersDay',
          'teacherAppreciation',
          'nurseAppreciation', 
          'encouragement',
          'workplace'
        ]
      }
    });
  });

  app.get('/api/rewards', (req, res) => {
    res.json({
      message: 'Success',
      data: {
        tierLevels: [25, 100, 200, 300, 400]
      }
    });
  });

  app.get('/api/store-locator', (req, res) => {
    res.json({
      message: 'Success',
      data: {
        stores: [
          {
            id: 1,
            name: 'Downtown',
            address: '123 Main St',
            city: 'Seattle',
            state: 'WA',
            zip: '98101',
            lat: 47.6062,
            lng: -122.3321
          },
          {
            id: 2,
            name: 'Pike Place',
            address: '1912 Pike Pl',
            city: 'Seattle',
            state: 'WA',
            zip: '98101',
            lat: 47.6100,
            lng: -122.3426
          }
        ]
      }
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
