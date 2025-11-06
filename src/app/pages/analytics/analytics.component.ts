import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Metric {
  label: string;
  value: number;
  color: string;
}

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.css'
})
export class AnalyticsComponent {
  trafficSources: Metric[] = [
    { label: 'Direct', value: 35, color: '#667eea' },
    { label: 'Organic Search', value: 28, color: '#764ba2' },
    { label: 'Social Media', value: 22, color: '#f093fb' },
    { label: 'Referral', value: 15, color: '#4facfe' }
  ];

  pageViews = [
    { page: '/dashboard', views: 12543, change: '+12%' },
    { page: '/products', views: 8234, change: '+8%' },
    { page: '/analytics', views: 5421, change: '-3%' },
    { page: '/settings', views: 3210, change: '+5%' }
  ];

  getTotalTraffic(): number {
    return this.trafficSources.reduce((sum, source) => sum + source.value, 0);
  }

  getPercentage(value: number): number {
    return (value / this.getTotalTraffic()) * 100;
  }
}
