import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats: StatCard[] = [
    {
      title: 'Total Users',
      value: '12,543',
      change: '+12.5%',
      trend: 'up',
      icon: '👥'
    },
    {
      title: 'Revenue',
      value: '$45,234',
      change: '+8.2%',
      trend: 'up',
      icon: '💰'
    },
    {
      title: 'Active Sessions',
      value: '3,421',
      change: '-3.1%',
      trend: 'down',
      icon: '⚡'
    },
    {
      title: 'Conversion Rate',
      value: '3.24%',
      change: '+1.8%',
      trend: 'up',
      icon: '📊'
    }
  ];

  recentActivities = [
    { user: 'John Doe', action: 'Created new user account', time: '5 minutes ago' },
    { user: 'Jane Smith', action: 'Updated profile settings', time: '15 minutes ago' },
    { user: 'Mike Johnson', action: 'Completed payment', time: '1 hour ago' },
    { user: 'Sarah Williams', action: 'Logged in', time: '2 hours ago' }
  ];
}
