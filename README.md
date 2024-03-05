# Angular2import datetime

class OutreachChannel:
    def __init__(self, name, channel_type):
        self.name = name
        self.channel_type = channel_type

class User:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone
        self.last_outreach_date = None
        self.outreach_attempts = {}

    def add_outreach_attempt(self, channel_name, attempt_count):
        self.outreach_attempts[channel_name] = attempt_count

    def can_send_outreach(self, channel_name, max_attempts, days_gap_channel_outreach, days_gap_between_channels):
        if self.last_outreach_date:
            time_diff = datetime.datetime.now() - self.last_outreach_date
            if time_diff.days < days_gap_between_channels:
                return False
        if channel_name in self.outreach_attempts:
            if self.outreach_attempts[channel_name] < max_attempts:
                return True
            else:
                return False
        else:
            return True

    def update_last_outreach_date(self):
        self.last_outreach_date = datetime.datetime.now()

def send_outreach(user, channel, max_attempts, days_gap_channel_outreach, days_gap_between_channels):
    if user.can_send_outreach(channel.name, max_attempts, days_gap_channel_outreach, days_gap_between_channels):
        # Send outreach via specified channel
        print(f"Sending outreach to {user.name} via {channel.name}...")
        # Update user's outreach attempts and last outreach date
        user.add_outreach_attempt(channel.name, user.outreach_attempts.get(channel.name, 0) + 1)
        user.update_last_outreach_date()
    else:
        print(f"Cannot send outreach to {user.name} via {channel.name} at the moment.")

# Example usage:
user1 = User("John", "john@example.com", "+123456789")
email_channel = OutreachChannel("Email", "email")
sms_channel = OutreachChannel("SMS", "sms")
ivr_channel = OutreachChannel("IVR", "ivr")

send_outreach(user1, email_channel, max_attempts=3, days_gap_channel_outreach=1, days_gap_between_channels=2)
send_outreach(user1, sms_channel, max_attempts=2, days_gap_channel_outreach=2, days_gap_between_channels=3)
send_outreach(user1, ivr_channel, max_attempts=1, days_gap_channel_outreach=1, days_gap_between_channels=2)

